import { Inject, Injectable, Injector } from '@angular/core';
import { HttpHandler, HttpRequest, HttpErrorResponse, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Token } from './models/token';

@Injectable()
export class AuthInterceptor {
  private authService: any;
  private refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private injector: Injector
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
    this.authService = this.injector.get(AuthService);
    return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 401:
              if (this.authService.getProvider().handle401Error) {
                return this.authService.getProvider().handle401Error(request, next);
              } else {
                this.authService.getProvider().logout();
                return throwError(error);
              }
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

}
