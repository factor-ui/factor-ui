/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';
import { AuthService } from './auth.service';
export class AuthInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        this.authService = this.injector.get(AuthService);
        return next.handle(this.addAuthenticationToken(request)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                switch (((/** @type {?} */ (error))).status) {
                    case 401:
                        return this.handle401Error(request, next);
                        break;
                    default:
                        return throwError(error);
                        break;
                }
            }
            else {
                return throwError(error);
            }
        }));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handle401Error(request, next) {
        if (!this.refreshTokenInProgress) {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(switchMap((newToken) => {
                if (newToken) {
                    this.refreshTokenSubject.next(newToken);
                    return next.handle(this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                this.authService.logout();
                return throwError('');
            }), catchError(error => {
                // If there is an exception calling 'refreshToken', bad news so logout.
                this.authService.logout();
                return throwError(error);
            }), share(), finalize(() => {
                this.refreshTokenInProgress = false;
            }));
        }
        else {
            //this.refreshTokenInProgress = false;
            return this.refreshTokenSubject.pipe(filter(token => token != null), take(1), switchMap(token => {
                return next.handle(this.addAuthenticationToken(request));
            }));
        }
    }
    /**
     * @param {?} request
     * @return {?}
     */
    addAuthenticationToken(request) {
        /** @type {?} */
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
AuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthInterceptor.ctorParameters = () => [
    { type: Injector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.refreshTokenInProgress;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.refreshTokenSubject;
    /**
     * @type {?}
     * @private
     */
    AuthInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBNEIsaUJBQWlCLEVBQXFGLE1BQU0sc0JBQXNCLENBQUM7QUFDdEssT0FBTyxFQUFjLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxlQUFlOzs7O0lBSzFCLFlBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpwQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isd0JBQW1CLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBSS9FLENBQUM7Ozs7OztJQUVMLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0QsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUN0QyxRQUFRLENBQUMsbUJBQW1CLEtBQUssRUFBQSxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUN6QyxLQUFLLEdBQUc7d0JBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDMUMsTUFBTTtvQkFDUjt3QkFDRSxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsTUFBTTtpQkFDVDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUNELGNBQWMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLFNBQVMsQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUMxQixJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQzFEO2dCQUVELDREQUE0RDtnQkFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQix1RUFBdUU7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUNGLEtBQUssRUFBRSxFQUNQLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLHNDQUFzQztZQUN0QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsRUFDOUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDaEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtJQUNILENBQUM7Ozs7O0lBQ0Qsc0JBQXNCLENBQUMsT0FBTzs7Y0FDdEIsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBRXpDLGdFQUFnRTtRQUNoRSxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUMzQyxPQUFPLE9BQU8sQ0FBQztTQUNoQjtRQUVELGtFQUFrRTtRQUNsRSxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDbkIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBRSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTthQUMzRDtTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWhGRixVQUFVOzs7O1lBUFUsUUFBUTs7Ozs7OztJQVMzQixzQ0FBaUM7Ozs7O0lBQ2pDLGlEQUF1Qzs7Ozs7SUFDdkMsOENBQW1GOzs7OztJQUdqRixtQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFNlbnRFdmVudCwgSHR0cEhlYWRlclJlc3BvbnNlLCBIdHRwUHJvZ3Jlc3NFdmVudCwgSHR0cFJlc3BvbnNlLCBIdHRwVXNlckV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIHRha2UsIHN3aXRjaE1hcCwgZmluYWxpemUsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICBwcml2YXRlIHJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW5TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHsgfVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cFNlbnRFdmVudCB8IEh0dHBIZWFkZXJSZXNwb25zZSB8IEh0dHBQcm9ncmVzc0V2ZW50IHwgSHR0cFJlc3BvbnNlPGFueT4gfCBIdHRwVXNlckV2ZW50PGFueT4gfCBhbnk+IHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQXV0aFNlcnZpY2UpO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKCg8SHR0cEVycm9yUmVzcG9uc2U+ZXJyb3IpLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZTQwMUVycm9yKHJlcXVlc3QsIG5leHQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGhhbmRsZTQwMUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QubmV4dChudWxsKTtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbigpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgobmV3VG9rZW46IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChuZXdUb2tlbikge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQobmV3VG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgZ2V0IGEgbmV3IHRva2VuLCB3ZSBhcmUgaW4gdHJvdWJsZSBzbyBsb2dvdXQuXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignJyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBleGNlcHRpb24gY2FsbGluZyAncmVmcmVzaFRva2VuJywgYmFkIG5ld3Mgc28gbG9nb3V0LlxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcy5yZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0LnBpcGUoXG4gICAgICAgIGZpbHRlcih0b2tlbiA9PiB0b2tlbiAhPSBudWxsKSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgc3dpdGNoTWFwKHRva2VuID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xuXG4gICAgLy8gSWYgYWNjZXNzIHRva2VuIGlzIG51bGwgdGhpcyBtZWFucyB0aGF0IHVzZXIgaXMgbm90IGxvZ2dlZCBpblxuICAgIC8vIEFuZCB3ZSByZXR1cm4gdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAgICBpZiAoIXRva2VuIHx8IHJlcXVlc3QudXJsLmluY2x1ZGVzKFwidG9rZW5cIikpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIC8vIFdlIGNsb25lIHRoZSByZXF1ZXN0LCBiZWNhdXNlIHRoZSBvcmlnaW5hbCByZXF1ZXN0IGlzIGltbXV0YWJsZVxuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==