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
            //this.refreshTokenInProgress = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBNEIsaUJBQWlCLEVBQXFGLE1BQU0sc0JBQXNCLENBQUM7QUFDdEssT0FBTyxFQUFjLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBTUUseUJBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpwQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isd0JBQW1CLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBSS9FLENBQUM7Ozs7OztJQUVMLG1DQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRCxVQUFVLENBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxtQkFBbUIsS0FBSyxFQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3pDLEtBQUssR0FBRzt3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IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFNlbnRFdmVudCwgSHR0cEhlYWRlclJlc3BvbnNlLCBIdHRwUHJvZ3Jlc3NFdmVudCwgSHR0cFJlc3BvbnNlLCBIdHRwVXNlckV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0LCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIHRha2UsIHN3aXRjaE1hcCwgZmluYWxpemUsIHNoYXJlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICBwcml2YXRlIHJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW5TdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHsgfVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cFNlbnRFdmVudCB8IEh0dHBIZWFkZXJSZXNwb25zZSB8IEh0dHBQcm9ncmVzc0V2ZW50IHwgSHR0cFJlc3BvbnNlPGFueT4gfCBIdHRwVXNlckV2ZW50PGFueT4gfCBhbnk+IHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlID0gdGhpcy5pbmplY3Rvci5nZXQoQXV0aFNlcnZpY2UpO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICBzd2l0Y2ggKCg8SHR0cEVycm9yUmVzcG9uc2U+ZXJyb3IpLnN0YXR1cykge1xuICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZTQwMUVycm9yKHJlcXVlc3QsIG5leHQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG4gIGhhbmRsZTQwMUVycm9yKHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QubmV4dChudWxsKTtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbigpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgobmV3VG9rZW46IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChuZXdUb2tlbikge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQobmV3VG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgZ2V0IGEgbmV3IHRva2VuLCB3ZSBhcmUgaW4gdHJvdWJsZSBzbyBsb2dvdXQuXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignJyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBleGNlcHRpb24gY2FsbGluZyAncmVmcmVzaFRva2VuJywgYmFkIG5ld3Mgc28gbG9nb3V0LlxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vdGhpcy5yZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0LnBpcGUoXG4gICAgICAgIGZpbHRlcih0b2tlbiA9PiB0b2tlbiAhPSBudWxsKSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgc3dpdGNoTWFwKHRva2VuID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xuXG4gICAgLy8gSWYgYWNjZXNzIHRva2VuIGlzIG51bGwgdGhpcyBtZWFucyB0aGF0IHVzZXIgaXMgbm90IGxvZ2dlZCBpblxuICAgIC8vIEFuZCB3ZSByZXR1cm4gdGhlIG9yaWdpbmFsIHJlcXVlc3RcbiAgICBpZiAoIXRva2VuIHx8IHJlcXVlc3QudXJsLmluY2x1ZGVzKFwidG9rZW5cIikpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0O1xuICAgIH1cblxuICAgIC8vIFdlIGNsb25lIHRoZSByZXF1ZXN0LCBiZWNhdXNlIHRoZSBvcmlnaW5hbCByZXF1ZXN0IGlzIGltbXV0YWJsZVxuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==