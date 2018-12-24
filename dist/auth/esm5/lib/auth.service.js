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
        this.router = injector.get(Router);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBRTlDO0lBUUUscUJBQ1UsSUFBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDSyxhQUFhO1FBSGhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDSyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQVJsRCxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUN2RixjQUFTLEdBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFTbEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7OztJQUVELDJCQUFLOzs7OztJQUFMLFVBQU0sSUFBUyxFQUFFLFFBQWlCO1FBQWxDLGlCQWdCQzs7WUFmTyxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDOUMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsYUFBYSxFQUFFLE9BQU87WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQVU7WUFDN0UsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN0RCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLFFBQVEsRUFBRTtnQkFDWixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFDRCw0QkFBTTs7OztJQUFOLFVBQU8sUUFBaUI7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7OztJQUNELDhCQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFDRCxrQ0FBWTs7O0lBQVo7UUFBQSxpQkFZQzs7WUFYTyxLQUFLLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQzs7WUFDdEQsR0FBRyxHQUFHLEtBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFVOztZQUN0QyxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDOUMsVUFBVSxFQUFFLGVBQWU7WUFDM0IsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBVTtZQUNoRSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDOztnQkF0REYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUUSxVQUFVO2dCQURFLFFBQVE7Z0JBTXBCLGNBQWM7Z0RBY2xCLE1BQU0sU0FBQyx5QkFBeUI7OztzQkFwQnJDO0NBK0RDLEFBdkRELElBdURDO1NBcERZLFdBQVc7Ozs7OztJQUN0QixxQ0FBdUY7O0lBQ3ZGLGdDQUFvRTs7SUFDcEUsNkJBQWU7Ozs7O0lBR2IsMkJBQXdCOzs7OztJQUN4QiwrQkFBMEI7Ozs7O0lBQzFCLHFDQUFzQzs7Ozs7SUFDdEMsb0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ2ZhY3Rvci11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2dnZWRJblNvdXJjZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGxvZ2dlZEluJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMubG9nZ2VkSW5Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBASW5qZWN0KCdGYWN0b3JBdXRoQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHtcbiAgICB0aGlzLnJvdXRlciA9IGluamVjdG9yLmdldChSb3V0ZXIpO1xuICB9XG5cbiAgbG9naW4oZm9ybTogYW55LCByZWRpcmVjdD86IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudFNlY3JldCxcbiAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogZm9ybS5wYXNzd29yZFxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuY29uZmlndXJhdGlvbi50b2tlblVybCwgcGFyYW1zKS5waXBlKHRhcCgodG9rZW46IGFueSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4sIGxvY2FsU3RvcmFnZSk7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3JlZGlyZWN0XSk7XG4gICAgICB9XG4gICAgfSkpO1xuICB9XG4gIGxvZ291dChyZWRpcmVjdD86IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZGVsZXRlKCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbicsIHJlZGlyZWN0ID8geyByZWRpcmVjdDogcmVkaXJlY3QgfSA6IHt9XSk7XG4gIH1cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gIH1cbiAgcmVmcmVzaFRva2VuKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nLCBsb2NhbFN0b3JhZ2UpO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29uZmlndXJhdGlvbi50b2tlblVybH1gO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudFNlY3JldCxcbiAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICAgIHJlZnJlc2hfdG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW5cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KS5waXBlKHRhcCgodG9rZW46IGFueSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4sIGxvY2FsU3RvcmFnZSk7XG4gICAgfSkpO1xuICB9XG59XG4iXX0=