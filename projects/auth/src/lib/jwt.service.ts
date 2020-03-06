import { Inject, Injectable, Injector } from '@angular/core';
import { HttpClient, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { StorageService } from 'factor-utils';

import { AuthProvider } from './auth-provider';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class JwtService implements AuthProvider {
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn: Observable<boolean> = this.loggedInSource.asObservable();
  private tokenKey = 'auth_jwt';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    @Inject('FactorAuthConfiguration') private configuration,
    private injector: Injector
  ) {
    this.checkLoggedIn();
  }

  addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
    const token: string = this.getToken();

    // If access token is null this means that user is not logged in
    // And we return the original request
    if (!token || request.url.includes("token")) {
      return request;
    }

    // We clone the request, because the original request is immutable
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  checkLoggedIn(): Observable<boolean> {
    if (this.getToken()) {
      this.loggedInSource.next(true);
    } else {
      this.loggedInSource.next(false);
    }
    return this.loggedIn;
  }
  getToken(): string {
    return this.storageService.get(this.tokenKey, 'local');
  }
  login(data: Login): Observable<any> {
    return this.http.post(this.configuration.tokenUrl, data).pipe(tap((token: any) => {
      this.storageService.set(this.tokenKey, token.token, 'local');
      this.loggedInSource.next(true);
    }));
  }
  logout(): void {
    this.storageService.delete(this.tokenKey, 'local');
    this.loggedInSource.next(false);
    if (this.configuration.nosessionUrl) {
      const router = this.injector.get(Router);
      router.navigateByUrl(this.configuration.nosessionUrl);
    }
  }
}
