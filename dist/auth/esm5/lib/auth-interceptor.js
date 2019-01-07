/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';
import { AuthService } from './auth.service';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    AuthInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        this.authService = this.injector.get(AuthService);
        return next.handle(this.addAuthenticationToken(request)).pipe(catchError(function (error) {
            if (error instanceof HttpErrorResponse) {
                switch (((/** @type {?} */ (error))).status) {
                    case 401:
                        return _this.handle401Error(request, next);
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
    };
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    AuthInterceptor.prototype.handle401Error = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        if (!this.refreshTokenInProgress) {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(switchMap(function (newToken) {
                if (newToken) {
                    _this.refreshTokenSubject.next(newToken);
                    return next.handle(_this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                _this.authService.logout();
                return throwError('');
            }), catchError(function (error) {
                // If there is an exception calling 'refreshToken', bad news so logout.
                _this.authService.logout();
                return throwError(error);
            }), share(), finalize(function () {
                _this.refreshTokenInProgress = false;
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(filter(function (token) { return token != null; }), take(1), switchMap(function (token) {
                return next.handle(_this.addAuthenticationToken(request));
            }));
        }
    };
    /**
     * @param {?} request
     * @return {?}
     */
    AuthInterceptor.prototype.addAuthenticationToken = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var token = this.authService.getToken();
        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!token || request.url.includes("token")) {
            return request;
        }
        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token
            }
        });
    };
    AuthInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthInterceptor.ctorParameters = function () { return [
        { type: Injector }
    ]; };
    return AuthInterceptor;
}());
export { AuthInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBNEIsaUJBQWlCLEVBQXFGLE1BQU0sc0JBQXNCLENBQUM7QUFDdEssT0FBTyxFQUFjLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBTUUseUJBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpwQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isd0JBQW1CLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBSS9FLENBQUM7Ozs7OztJQUVMLG1DQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRCxVQUFVLENBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxtQkFBbUIsS0FBSyxFQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3pDLEtBQUssR0FBRzt3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YXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwU2VudEV2ZW50LCBIdHRwSGVhZGVyUmVzcG9uc2UsIEh0dHBQcm9ncmVzc0V2ZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBVc2VyRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgdGFrZSwgc3dpdGNoTWFwLCBmaW5hbGl6ZSwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gIHByaXZhdGUgcmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICBwcml2YXRlIHJlZnJlc2hUb2tlblN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkgeyB9XG5cbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwU2VudEV2ZW50IHwgSHR0cEhlYWRlclJlc3BvbnNlIHwgSHR0cFByb2dyZXNzRXZlbnQgfCBIdHRwUmVzcG9uc2U8YW55PiB8IEh0dHBVc2VyRXZlbnQ8YW55PiB8IGFueT4ge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIHN3aXRjaCAoKDxIdHRwRXJyb3JSZXNwb25zZT5lcnJvcikuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlNDAxRXJyb3IocmVxdWVzdCwgbmV4dCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbiAgaGFuZGxlNDAxRXJyb3IocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpIHtcbiAgICBpZiAoIXRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcykge1xuICAgICAgdGhpcy5yZWZyZXNoVG9rZW5JblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVmcmVzaFRva2VuU3ViamVjdC5uZXh0KG51bGwpO1xuICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UucmVmcmVzaFRva2VuKCkucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChuZXdUb2tlbjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKG5ld1Rva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QubmV4dChuZXdUb2tlbik7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBnZXQgYSBuZXcgdG9rZW4sIHdlIGFyZSBpbiB0cm91YmxlIHNvIGxvZ291dC5cbiAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKCcnKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIElmIHRoZXJlIGlzIGFuIGV4Y2VwdGlvbiBjYWxsaW5nICdyZWZyZXNoVG9rZW4nLCBiYWQgbmV3cyBzbyBsb2dvdXQuXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgIH0pLFxuICAgICAgICBzaGFyZSgpLFxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaFRva2VuU3ViamVjdC5waXBlKFxuICAgICAgICBmaWx0ZXIodG9rZW4gPT4gdG9rZW4gIT0gbnVsbCksXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIHN3aXRjaE1hcCh0b2tlbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBhZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcblxuICAgIC8vIElmIGFjY2VzcyB0b2tlbiBpcyBudWxsIHRoaXMgbWVhbnMgdGhhdCB1c2VyIGlzIG5vdCBsb2dnZWQgaW5cbiAgICAvLyBBbmQgd2UgcmV0dXJuIHRoZSBvcmlnaW5hbCByZXF1ZXN0XG4gICAgaWYgKCF0b2tlbiB8fCByZXF1ZXN0LnVybC5pbmNsdWRlcyhcInRva2VuXCIpKSB7XG4gICAgICByZXR1cm4gcmVxdWVzdDtcbiAgICB9XG5cbiAgICAvLyBXZSBjbG9uZSB0aGUgcmVxdWVzdCwgYmVjYXVzZSB0aGUgb3JpZ2luYWwgcmVxdWVzdCBpcyBpbW11dGFibGVcbiAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGV9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWBcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=