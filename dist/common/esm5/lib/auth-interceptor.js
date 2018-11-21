/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
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
        /** @type {?} */
        var token = this.authService.getToken();
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', token.token_type + " " + token.access_token)
            });
        }
        return next.handle(request).pipe(tap(function (event) { }, function (err) {
            if (err instanceof HttpErrorResponse) {
                if (err.status == 401) {
                    _this.authService.logout();
                }
            }
        }));
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
    AuthInterceptor.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1jb21tb24vIiwic291cmNlcyI6WyJsaWIvYXV0aC1pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUF3RCxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9HLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFJRSx5QkFDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3hCLENBQUM7Ozs7OztJQUVMLG1DQUFTOzs7OztJQUFULFVBQVUsT0FBeUIsRUFBRSxJQUFpQjtRQUF0RCxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7WUFDOUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFO1FBQ3ZDLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUssS0FBSyxDQUFDLFVBQVUsU0FBSSxLQUFLLENBQUMsWUFBYyxDQUFDO2FBQzNGLENBQUMsQ0FBQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLFVBQUEsS0FBSyxJQUFNLENBQUMsRUFBRSxVQUFBLEdBQUc7WUFDbkIsSUFBSSxHQUFHLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3BDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7b0JBQ3JCLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQzNCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBekJGLFVBQVU7Ozs7Z0JBUFUsUUFBUTs7SUFpQzdCLHNCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QlksZUFBZTs7Ozs7O0lBQzFCLHNDQUFpQzs7Ozs7SUFHL0IsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEF1dGhTZXJ2aWNlKTtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKGV2ZW50ID0+IHsgfSwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGVyci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=