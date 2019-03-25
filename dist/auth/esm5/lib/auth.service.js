/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return this.http.post(this.configuration.tokenUrl, params).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.storageService.set('token', token, localStorage);
            _this.loggedInSource.next(true);
            if (redirect) {
                _this.router.navigate([redirect]);
            }
        })));
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
        return this.http.get(url, { params: params }).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.storageService.set('token', token, localStorage);
        })));
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
    /**
     * @type {?}
     * @private
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRTlDO0lBUUUscUJBQ1UsSUFBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDSyxhQUFhO1FBSGhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDSyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQVJsRCxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNoRixjQUFTLEdBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRdkUsQ0FBQzs7Ozs7O0lBRUwsMkJBQUs7Ozs7O0lBQUwsVUFBTSxJQUFTLEVBQUUsUUFBaUI7UUFBbEMsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7WUFDakQsTUFBTSxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUN0QyxhQUFhLEVB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dGFibGUsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdmYWN0b3ItdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgbG9nZ2VkSW5Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwdWJsaWMgbG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5sb2dnZWRJblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBsb2dpbihmb3JtOiBhbnksIHJlZGlyZWN0Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMucm91dGVyIHx8IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgICB1c2VybmFtZTogZm9ybS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsLCBwYXJhbXMpLnBpcGUodGFwKCh0b2tlbjogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbiwgbG9jYWxTdG9yYWdlKTtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbiAgbG9nb3V0KHJlZGlyZWN0Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLnJvdXRlciB8fCB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZGVsZXRlKCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbicsIHJlZGlyZWN0ID8geyByZWRpcmVjdDogcmVkaXJlY3QgfSA6IHt9XSk7XG4gIH1cbiAgZ2V0VG9rZW4oKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgbG9jYWxTdG9yYWdlKTtcbiAgfVxuICByZWZyZXNoVG9rZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsfWA7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgcmVmcmVzaF90b2tlbjogdG9rZW4ucmVmcmVzaF90b2tlblxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUodGFwKCh0b2tlbjogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbiwgbG9jYWxTdG9yYWdlKTtcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==