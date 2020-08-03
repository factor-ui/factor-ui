import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { tap, catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';

import { StorageService } from 'factor-utils';

import { AuthProvider } from './auth-provider';
import { Token } from './models/token';

@Injectable({
  providedIn: 'root'
})
export class OAuthService implements AuthProvider {
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn: Observable<boolean> = this.loggedInSource.asObservable();
  public refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    @Inject('FactorAuthConfiguration') private configuration,
    private injector: Injector
  ) {
    this.checkLoggedIn();
  }

  addAuthenticationToken(request): HttpRequest<any> {
    const token: Token = this.getToken();

    // If access token is null this means that user is not logged in
    // And we return the original request
    if (!token || request.url.includes("token")) {
      return request;
    }

    // We clone the request, because the original request is immutable
    return request.clone({
      setHeaders: {
        Authorization: `${token.token_type} ${token.access_token}`
      }
    });
  }
  checkLoggedIn() {
    if (this.getToken()) {
      this.loggedInSource.next(true);
    } else {
      this.loggedInSource.next(false);
    }
    return this.loggedIn;
  }
  getToken(): Token {
    return this.storageService.get('token', 'local');
  }
  handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);
      return this.refreshToken().pipe(
        switchMap((newToken: Token) => {
          if (newToken) {
            this.refreshTokenSubject.next(newToken);
            return next.handle(this.addAuthenticationToken(request));
          }
          // If we don't get a new token, we are in trouble so logout.
          this.storageService.delete('token', 'local');
          this.loggedInSource.next(false);
          return throwError(new HttpErrorResponse({
            error: {},
            headers: new HttpHeaders(),
            status: 401,
            statusText: '',
            url: undefined,
          }));
        }),
        catchError(error => {
          // It cant replace access token set error status 401 to continue flow
          return throwError(new HttpErrorResponse({
            error: error.error,
            headers: error.headers,
            status: 401,
            statusText: error.statusText,
            url: error.url || undefined,
          }));
        }),
        share(),
        finalize(() => {
          this.refreshTokenInProgress = false;
        }),
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(token => {
          return next.handle(this.addAuthenticationToken(request));
        })
      );
    }
  }
  login(form: { username: string, password: string }): Observable<Token> {
    const params = {
      client_id: this.configuration.clientId,
      client_secret: this.configuration.clientSecret,
      grant_type: 'password',
      response_type: 'token',
      username: form.username,
      password: form.password,
      state: Date.now()
    };
    return this.http.post(this.configuration.tokenUrl, params).pipe(tap((token: Token) => {
      this.storageService.set('token', token, 'local');
      this.loggedInSource.next(true);
    }));
  }
  logout(): void {
    this.storageService.delete('token', 'local');
    this.loggedInSource.next(false);
    if (this.configuration.nosessionUrl) {
      const router = this.injector.get(Router);
      router.navigateByUrl(this.configuration.nosessionUrl);
    }
  }
  refreshToken(): Observable<Token> {
    const token = this.getToken();
    const url = `${this.configuration.tokenUrl}`;
    const params = {
      client_id: this.configuration.clientId,
      client_secret: this.configuration.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token
    };
    return this.http.get(url, { params: params }).pipe(tap((token: Token) => {
      this.storageService.set('token', token, 'local');
      this.loggedInSource.next(true);
    }, (error) => {
      this.storageService.delete('token', 'local');
      this.loggedInSource.next(false);
    }));
  }
}
