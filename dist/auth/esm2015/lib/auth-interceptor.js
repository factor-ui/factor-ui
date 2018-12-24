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
            this.refreshTokenInProgress = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBNEIsaUJBQWlCLEVBQXFGLE1BQU0sc0JBQXNCLENBQUM7QUFDdEssT0FBTyxFQUFjLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLE1BQU0sT0FBTyxlQUFlOzs7O0lBSzFCLFlBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpwQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isd0JBQW1CLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBSS9FLENBQUM7Ozs7OztJQUVMLFNBQVMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDM0QsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUN0QyxRQUFRLENBQUMsbUJBQW1CLEtBQUssRUFBQSxDQUFDLENBQUMsTUFBTSxFQUFFO29CQUN6QyxLQUFLLEdBQUc7d0JBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDMUMsTUFBTTtvQkFDUjt3QkFDRSxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsTUFBTTtpQkFDVDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUNELGNBQWMsQ0FBQyxPQUF5QixFQUFFLElBQWlCO1FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3pDLFNBQVMsQ0FBQyxDQUFDLFFBQWEsRUFBRSxFQUFFO2dCQUMxQixJQUFJLFFBQVEsRUFBRTtvQkFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQzFEO2dCQUVELDREQUE0RDtnQkFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDMUIsT0FBTyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQix1RUFBdUU7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxFQUNGLEtBQUssRUFBRSxFQUNQLFFBQVEsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxLQUFLLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEVBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FDSCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7OztJQUNELHNCQUFzQixDQUFDLE9BQU87O2NBQ3RCLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtRQUV6QyxnRUFBZ0U7UUFDaEUscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxPQUFPLENBQUM7U0FDaEI7UUFFRCxrRUFBa0U7UUFDbEUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ25CLFVBQVUsRUFBRTtnQkFDVixhQUFhLEVBQUUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7YUFDM0Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoRkYsVUFBVTs7OztZQVBVLFFBQVE7Ozs7Ozs7SUFTM0Isc0NBQWlDOzs7OztJQUNqQyxpREFBdUM7Ozs7O0lBQ3ZDLDhDQUFtRjs7Ozs7SUFHakYsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBTZW50RXZlbnQsIEh0dHBIZWFkZXJSZXNwb25zZSwgSHR0cFByb2dyZXNzRXZlbnQsIEh0dHBSZXNwb25zZSwgSHR0cFVzZXJFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCB0YWtlLCBzd2l0Y2hNYXAsIGZpbmFsaXplLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gIHByaXZhdGUgcmVmcmVzaFRva2VuU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBTZW50RXZlbnQgfCBIdHRwSGVhZGVyUmVzcG9uc2UgfCBIdHRwUHJvZ3Jlc3NFdmVudCB8IEh0dHBSZXNwb25zZTxhbnk+IHwgSHR0cFVzZXJFdmVudDxhbnk+IHwgYW55PiB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEF1dGhTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoICgoPEh0dHBFcnJvclJlc3BvbnNlPmVycm9yKS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGU0MDFFcnJvcihyZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBoYW5kbGU0MDFFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcikge1xuICAgIGlmICghdGhpcy5yZWZyZXNoVG9rZW5JblByb2dyZXNzKSB7XG4gICAgICB0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MgPSB0cnVlO1xuICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQobnVsbCk7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5yZWZyZXNoVG9rZW4oKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKG5ld1Rva2VuOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAobmV3VG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuU3ViamVjdC5uZXh0KG5ld1Rva2VuKTtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHdlIGRvbid0IGdldCBhIG5ldyB0b2tlbiwgd2UgYXJlIGluIHRyb3VibGUgc28gbG9nb3V0LlxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoJycpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gZXhjZXB0aW9uIGNhbGxpbmcgJ3JlZnJlc2hUb2tlbicsIGJhZCBuZXdzIHNvIGxvZ291dC5cbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgfSksXG4gICAgICAgIHNoYXJlKCksXG4gICAgICAgIGZpbmFsaXplKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QucGlwZShcbiAgICAgICAgZmlsdGVyKHRva2VuID0+IHRva2VuICE9IG51bGwpLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBzd2l0Y2hNYXAodG9rZW4gPT4ge1xuICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KSB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG5cbiAgICAvLyBJZiBhY2Nlc3MgdG9rZW4gaXMgbnVsbCB0aGlzIG1lYW5zIHRoYXQgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgLy8gQW5kIHdlIHJldHVybiB0aGUgb3JpZ2luYWwgcmVxdWVzdFxuICAgIGlmICghdG9rZW4gfHwgcmVxdWVzdC51cmwuaW5jbHVkZXMoXCJ0b2tlblwiKSkge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgLy8gV2UgY2xvbmUgdGhlIHJlcXVlc3QsIGJlY2F1c2UgdGhlIG9yaWdpbmFsIHJlcXVlc3QgaXMgaW1tdXRhYmxlXG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19