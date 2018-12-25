/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators';
import { StorageService } from 'factor-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "factor-utils";
var AuthService = /** @class */ (function () {
    function AuthService(http, injector, storageService, configuration) {
        this.http = http;
        this.injector = injector;
        this.storageService = storageService;
        this.configuration = configuration;
        this.loggedInSource = new BehaviorSubject(false);
        this.loggedIn$ = this.loggedInSource.asObservable();
    }
    /**
     * @param {?} form
     * @param {?=} redirect
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} form
     * @param {?=} redirect
     * @return {?}
     */
    function (form, redirect) {
        var _this = this;
        this.router = this.router || this.injector.get(Router);
        /** @type {?} */
        var params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'password',
            response_type: 'token',
            username: form.username,
            password: form.password
        };
        return this.http.post(this.configuration.tokenUrl, params).pipe(tap(function (token) {
            _this.storageService.set('token', token, localStorage);
            _this.loggedInSource.next(true);
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        }));
    };
    /**
     * @param {?=} redirect
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @param {?=} redirect
     * @return {?}
     */
    function (redirect) {
        this.router = this.router || this.injector.get(Router);
        this.storageService.delete('token', localStorage);
        this.loggedInSource.next(false);
        this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.get('token', localStorage);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.refreshToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var token = this.storageService.get('token', localStorage);
        /** @type {?} */
        var url = "" + this.configuration.tokenUrl;
        /** @type {?} */
        var params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token
        };
        return this.http.get(url, { params: params }).pipe(tap(function (token) {
            _this.storageService.set('token', token, localStorage);
        }));
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Injector },
        { type: StorageService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i0.INJECTOR), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.loggedInSource;
    /** @type {?} */
    AuthService.prototype.loggedIn$;
    /** @type {?} */
    AuthService.prototype.router;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRTlDO0lBUUUscUJBQ1UsSUFBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDSyxhQUFhO1FBSGhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDSyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQVJsRCxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUN2RixjQUFTLEdBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRaEUsQ0FBQzs7Ozs7O0lBRUwsMkJBQUs7Ozs7O0lBQUwsVUFBTSxJQUFTLEVBQUUsUUFBaUI7UUFBbEMsaUJBa0JDO1FBakJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDakQsTUFBTSxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUN0QyxhQUFhLEVB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Y3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnZmFjdG9yLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGxvZ2dlZEluU291cmNlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgbG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5sb2dnZWRJblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ0ZhY3RvckF1dGhDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgbG9naW4oZm9ybTogYW55LCByZWRpcmVjdD86IHN0cmluZykge1xuICAgIHRoaXMucm91dGVyID0gdGhpcy5yb3V0ZXIgfHwgdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY29uZmlndXJhdGlvbi5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY29uZmlndXJhdGlvbi5jbGllbnRTZWNyZXQsXG4gICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJyxcbiAgICAgIHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmRcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlblVybCwgcGFyYW1zKS5waXBlKHRhcCgodG9rZW46IGFueSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4sIGxvY2FsU3RvcmFnZSk7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG4gIGxvZ291dChyZWRpcmVjdD86IHN0cmluZykge1xuICAgIHRoaXMucm91dGVyID0gdGhpcy5yb3V0ZXIgfHwgdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmRlbGV0ZSgndG9rZW4nLCBsb2NhbFN0b3JhZ2UpO1xuICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dChmYWxzZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nLCByZWRpcmVjdCA/IHsgcmVkaXJlY3Q6IHJlZGlyZWN0IH0gOiB7fV0pO1xuICB9XG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nLCBsb2NhbFN0b3JhZ2UpO1xuICB9XG4gIHJlZnJlc2hUb2tlbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgbG9jYWxTdG9yYWdlKTtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW5Vcmx9YDtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY29uZmlndXJhdGlvbi5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY29uZmlndXJhdGlvbi5jbGllbnRTZWNyZXQsXG4gICAgICBncmFudF90eXBlOiAncmVmcmVzaF90b2tlbicsXG4gICAgICByZWZyZXNoX3Rva2VuOiB0b2tlbi5yZWZyZXNoX3Rva2VuXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZSh0YXAoKHRva2VuOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuLCBsb2NhbFN0b3JhZ2UpO1xuICAgIH0pKTtcbiAgfVxufVxuIl19