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
export class AuthService {
    /**
     * @param {?} http
     * @param {?} injector
     * @param {?} storageService
     * @param {?} configuration
     */
    constructor(http, injector, storageService, configuration) {
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
    login(form, redirect) {
        this.router = this.router || this.injector.get(Router);
        /** @type {?} */
        const params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'password',
            response_type: 'token',
            username: form.username,
            password: form.password
        };
        return this.http.post(this.configuration.tokenUrl, params).pipe(tap((token) => {
            this.storageService.set('token', token, localStorage);
            this.loggedInSource.next(true);
            if (redirect) {
                this.router.navigate([redirect]);
            }
        }));
    }
    /**
     * @param {?=} redirect
     * @return {?}
     */
    logout(redirect) {
        this.router = this.router || this.injector.get(Router);
        this.storageService.delete('token', localStorage);
        this.loggedInSource.next(false);
        this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
    }
    /**
     * @return {?}
     */
    getToken() {
        return this.storageService.get('token', localStorage);
    }
    /**
     * @return {?}
     */
    refreshToken() {
        /** @type {?} */
        const token = this.storageService.get('token', localStorage);
        /** @type {?} */
        const url = `${this.configuration.tokenUrl}`;
        /** @type {?} */
        const params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token
        };
        return this.http.get(url, { params: params }).pipe(tap((token) => {
            this.storageService.set('token', token, localStorage);
        }));
    }
}
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: Injector },
    { type: StorageService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i0.INJECTOR), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSzlDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBS3RCLFlBQ1UsSUFBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDSyxhQUFhO1FBSGhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDSyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQVJsRCxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUN2RixjQUFTLEdBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRaEUsQ0FBQzs7Ozs7O0lBRUwsS0FBSyxDQUFDLElBQVMsRUFBRSxRQUFpQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O2NBQ2pELE1BQU0sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDdEMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUM5QyxVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsT0FBTztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDakYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFDRCxNQUFNLENBQUMsUUFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELFlBQVk7O2NBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7O2NBQ3RELEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFOztjQUN0QyxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDOUMsVUFBVSxFQUFFLGVBQWU7WUFDM0IsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBdERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRRLFVBQVU7WUFERSxRQUFRO1lBTXBCLGNBQWM7NENBY2xCLE1BQU0sU0FBQyx5QkFBeUI7Ozs7Ozs7O0lBUm5DLHFDQUF1Rjs7SUFDdkYsZ0NBQW9FOztJQUNwRSw2QkFBZTs7Ozs7SUFHYiwyQkFBd0I7Ozs7O0lBQ3hCLCtCQUEwQjs7Ozs7SUFDMUIscUNBQXNDOzs7OztJQUN0QyxvQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnZmFjdG9yLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGxvZ2dlZEluU291cmNlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgbG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5sb2dnZWRJblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ0ZhY3RvckF1dGhDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgbG9naW4oZm9ybTogYW55LCByZWRpcmVjdD86IHN0cmluZykge1xuICAgIHRoaXMucm91dGVyID0gdGhpcy5yb3V0ZXIgfHwgdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY29uZmlndXJhdGlvbi5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuY29uZmlndXJhdGlvbi5jbGllbnRTZWNyZXQsXG4gICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJyxcbiAgICAgIHVzZXJuYW1lOiBmb3JtLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IGZvcm0ucGFzc3dvcmRcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW5VcmwsIHBhcmFtcykucGlwZSh0YXAoKHRva2VuOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuLCBsb2NhbFN0b3JhZ2UpO1xuICAgICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KHRydWUpO1xuICAgICAgaWYgKHJlZGlyZWN0KSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtyZWRpcmVjdF0pO1xuICAgICAgfVxuICAgIH0pKTtcbiAgfVxuICBsb2dvdXQocmVkaXJlY3Q/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMucm91dGVyIHx8IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5kZWxldGUoJ3Rva2VuJywgbG9jYWxTdG9yYWdlKTtcbiAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQoZmFsc2UpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJywgcmVkaXJlY3QgPyB7IHJlZGlyZWN0OiByZWRpcmVjdCB9IDoge31dKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgbG9jYWxTdG9yYWdlKTtcbiAgfVxuICByZWZyZXNoVG9rZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsfWA7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgcmVmcmVzaF90b2tlbjogdG9rZW4ucmVmcmVzaF90b2tlblxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUodGFwKCh0b2tlbjogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbiwgbG9jYWxTdG9yYWdlKTtcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==