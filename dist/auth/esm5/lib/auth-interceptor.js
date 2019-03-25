/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return next.handle(this.addAuthenticationToken(request)).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
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
        })));
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
            return this.authService.refreshToken().pipe(switchMap((/**
             * @param {?} newToken
             * @return {?}
             */
            function (newToken) {
                if (newToken) {
                    _this.refreshTokenSubject.next(newToken);
                    return next.handle(_this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                _this.authService.logout();
                return throwError('');
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                // If there is an exception calling 'refreshToken', bad news so logout.
                _this.authService.logout();
                return throwError(error);
            })), share(), finalize((/**
             * @return {?}
             */
            function () {
                _this.refreshTokenInProgress = false;
            })));
        }
        else {
            return this.refreshTokenSubject.pipe(filter((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return token != null; })), take(1), switchMap((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                return next.handle(_this.addAuthenticationToken(request));
            })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBNEIsaUJBQWlCLEVBQXFGLE1BQU0sc0JBQXNCLENBQUM7QUFDdEssT0FBTyxFQUFjLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDO0lBTUUseUJBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUpwQiwyQkFBc0IsR0FBRyxLQUFLLENBQUM7UUFDL0Isd0JBQW1CLEdBQXlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxDQUFDO0lBSS9FLENBQUM7Ozs7OztJQUVMLG1DQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkFrQkM7UUFqQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUMzRCxVQUFVOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3RDLFFBQVEsQ0FBQyxtQkFBbUIsS0FBSyxFQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBQ3pDLEtBQUssR0FB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b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBIYW5kbGVyLCBIdHRwUmVxdWVzdCwgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBTZW50RXZlbnQsIEh0dHBIZWFkZXJSZXNwb25zZSwgSHR0cFByb2dyZXNzRXZlbnQsIEh0dHBSZXNwb25zZSwgSHR0cFVzZXJFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCB0YWtlLCBzd2l0Y2hNYXAsIGZpbmFsaXplLCBzaGFyZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgcHJpdmF0ZSByZWZyZXNoVG9rZW5JblByb2dyZXNzID0gZmFsc2U7XG4gIHByaXZhdGUgcmVmcmVzaFRva2VuU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBTZW50RXZlbnQgfCBIdHRwSGVhZGVyUmVzcG9uc2UgfCBIdHRwUHJvZ3Jlc3NFdmVudCB8IEh0dHBSZXNwb25zZTxhbnk+IHwgSHR0cFVzZXJFdmVudDxhbnk+IHwgYW55PiB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEF1dGhTZXJ2aWNlKTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoICgoPEh0dHBFcnJvclJlc3BvbnNlPmVycm9yKS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGU0MDFFcnJvcihyZXF1ZXN0LCBuZXh0KTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBoYW5kbGU0MDFFcnJvcihyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKCF0aGlzLnJlZnJlc2hUb2tlbkluUHJvZ3Jlc3MpIHtcbiAgICAgIHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QubmV4dChudWxsKTtcbiAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbigpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgobmV3VG9rZW46IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChuZXdUb2tlbikge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5TdWJqZWN0Lm5leHQobmV3VG9rZW4pO1xuICAgICAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgZ2V0IGEgbmV3IHRva2VuLCB3ZSBhcmUgaW4gdHJvdWJsZSBzbyBsb2dvdXQuXG4gICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcignJyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbiBleGNlcHRpb24gY2FsbGluZyAncmVmcmVzaFRva2VuJywgYmFkIG5ld3Mgc28gbG9nb3V0LlxuICAgICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgICAgICB9KSxcbiAgICAgICAgc2hhcmUoKSxcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hUb2tlblN1YmplY3QucGlwZShcbiAgICAgICAgZmlsdGVyKHRva2VuID0+IHRva2VuICE9IG51bGwpLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBzd2l0Y2hNYXAodG9rZW4gPT4ge1xuICAgICAgICAgIHJldHVybiBuZXh0LmhhbmRsZSh0aGlzLmFkZEF1dGhlbnRpY2F0aW9uVG9rZW4ocmVxdWVzdCkpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgYWRkQXV0aGVudGljYXRpb25Ub2tlbihyZXF1ZXN0KTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG5cbiAgICAvLyBJZiBhY2Nlc3MgdG9rZW4gaXMgbnVsbCB0aGlzIG1lYW5zIHRoYXQgdXNlciBpcyBub3QgbG9nZ2VkIGluXG4gICAgLy8gQW5kIHdlIHJldHVybiB0aGUgb3JpZ2luYWwgcmVxdWVzdFxuICAgIGlmICghdG9rZW4gfHwgcmVxdWVzdC51cmwuaW5jbHVkZXMoXCJ0b2tlblwiKSkge1xuICAgICAgcmV0dXJuIHJlcXVlc3Q7XG4gICAgfVxuXG4gICAgLy8gV2UgY2xvbmUgdGhlIHJlcXVlc3QsIGJlY2F1c2UgdGhlIG9yaWdpbmFsIHJlcXVlc3QgaXMgaW1tdXRhYmxlXG4gICAgcmV0dXJuIHJlcXVlc3QuY2xvbmUoe1xuICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19