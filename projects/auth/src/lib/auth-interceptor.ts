import { Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpRequest, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor {
  private authService: AuthService;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private injector: Injector
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    this.authService = this.injector.get(AuthService);
    return next.handle(this.addAuthenticationToken(request)).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 401:
              return this.handle401Error(request, next);
              break;
            default:
              return throwError(error);
              break;
          }
        } else {
          return throwError(error);
        }
      })
    );
  }
  handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);
      return this.authService.refreshToken().pipe(
        switchMap((newToken: any) => {
          if (newToken) {
            this.refreshTokenSubject.next(newToken);
            return next.handle(this.addAuthenticationToken(request));
          }

          // If we don't get a new token, we are in trouble so logout.
          this.authService.logout();
          return throwError('');
        }),
        catchError(error => {
          // If there is an exception calling 'refreshToken', bad news so logout.
          this.authService.logout();
          return throwError(error);
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
  addAuthenticationToken(request): HttpRequest<any> {
    const token = this.authService.getToken();

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

}
