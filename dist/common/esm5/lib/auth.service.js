/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./storage.service";
var AuthService = /** @class */ (function () {
    function AuthService(http, injector, storageService, environment) {
        this.http = http;
        this.injector = injector;
        this.storageService = storageService;
        this.environment = environment;
        this.loggedInSource = new BehaviorSubject(false);
        this.loggedIn$ = this.loggedInSource.asObservable();
        this.configurationSource = new BehaviorSubject(false);
        this.configuration$ = this.configurationSource.asObservable();
    }
    /**
     * @param {?} formValue
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} formValue
     * @return {?}
     */
    function (formValue) {
        var _this = this;
        /** @type {?} */
        var body = Object.assign(formValue, {
            grant_type: 'password',
            response_type: 'token',
            client_id: this.environment.oauth.clientId,
            client_secret: this.environment.oauth.clientSecret
        });
        return this.http.post(this.environment.oauth.tokenUrl, body).pipe(tap(function (token) {
            _this.storageService.set('token', token);
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
        this.router = this.injector.get(Router);
        this.storageService.delete('token');
        this.loggedInSource.next(false);
        this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getConfiguration = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.http.get(this.environment.configurationUrl).pipe(tap(function (response) {
            _this.loggedInSource.next(true);
            _this.configurationSource.next(response);
            //Save last user loggedIn
            _this.storageService.set('lastUser', {
                username: response.user.username,
                picture: response.picture
            }, localStorage);
        }));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.get('token');
    };
    /**
     * @return {?}
     */
    AuthService.prototype.checkAuth = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.getToken()) {
            /** @type {?} */
            var config = this.getConfiguration().subscribe(function () {
                _this.loggedInSource.next(true);
            }, function (error) {
                if (error.status == 0) {
                    _this.router = _this.injector.get(Router);
                    _this.router.navigateByUrl('/error/0', { skipLocationChange: true });
                }
            });
            return config;
        }
        else {
            return false;
        }
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
        { type: undefined, decorators: [{ type: Inject, args: ['environment',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i0.INJECTOR), i0.inject(i2.StorageService), i0.inject("environment")); }, token: AuthService, providedIn: "root" });
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
    AuthService.prototype.configurationSource;
    /** @type {?} */
    AuthService.prototype.configuration$;
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
    AuthService.prototype.environment;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVuRDtJQVVFLHFCQUNVLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLGNBQThCLEVBQ1AsV0FBVztRQUhsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1AsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFWcEMsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDdkYsY0FBUyxHQUF3QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHdCQUFtQixHQUF5QixJQUFJLGVBQWUsQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUNwRixtQkFBYyxHQUFvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRdEUsQ0FBQzs7Ozs7SUFFTCwyQkFBSzs7OztJQUFMLFVBQU0sU0FBaUQ7UUFBdkQsaUJBVUM7O1lBVEssSUFBSSxHQUFXLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQzFDLFVBQVUsRUFBRSxVQUFV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REFnQmxCLE1BQU0sU0FBQyxhQUFhOzs7c0JBdEJ6QjtDQXVFQyxBQS9ERCxJQStEQztTQTVEWSxXQUFXOzs7Ozs7SUFDdEIscUNBQXVGOztJQUN2RixnQ0FBb0U7Ozs7O0lBQ3BFLDBDQUFvRjs7SUFDcEYscUNBQTBFOztJQUMxRSw2QkFBZTs7Ozs7SUFHYiwyQkFBd0I7Ozs7O0lBQ3hCLCtCQUEwQjs7Ozs7SUFDMUIscUNBQXNDOzs7OztJQUN0QyxrQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgbG9nZ2VkSW5Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBsb2dnZWRJbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmxvZ2dlZEluU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb25Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KGZhbHNlKTtcbiAgY29uZmlndXJhdGlvbiQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuY29uZmlndXJhdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudFxuICApIHsgfVxuXG4gIGxvZ2luKGZvcm1WYWx1ZTogeyB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH0pIHtcbiAgICBsZXQgYm9keTogb2JqZWN0ID0gT2JqZWN0LmFzc2lnbihmb3JtVmFsdWUsIHtcbiAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmVudmlyb25tZW50Lm9hdXRoLmNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5lbnZpcm9ubWVudC5vYXV0aC5jbGllbnRTZWNyZXRcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5lbnZpcm9ubWVudC5vYXV0aC50b2tlblVybCwgYm9keSkucGlwZSh0YXAoKHRva2VuOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuKTtcbiAgICB9KSk7XG4gIH1cbiAgbG9nb3V0KHJlZGlyZWN0Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZGVsZXRlKCd0b2tlbicpO1xuICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dChmYWxzZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nLCByZWRpcmVjdD8ge3JlZGlyZWN0OnJlZGlyZWN0fSA6IHt9XSk7XG4gIH1cbiAgZ2V0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmVudmlyb25tZW50LmNvbmZpZ3VyYXRpb25VcmwpLnBpcGUodGFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2UubmV4dChyZXNwb25zZSk7XG4gICAgICAvL1NhdmUgbGFzdCB1c2VyIGxvZ2dlZEluXG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnbGFzdFVzZXInLCB7XG4gICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS51c2VyLnVzZXJuYW1lLFxuICAgICAgICBwaWN0dXJlOiByZXNwb25zZS5waWN0dXJlXG4gICAgICB9LCBsb2NhbFN0b3JhZ2UpO1xuICAgIH0pKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJyk7XG4gIH1cbiAgY2hlY2tBdXRoKCkge1xuICAgIGlmICh0aGlzLmdldFRva2VuKCkpIHtcbiAgICAgIGxldCBjb25maWcgPSB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS5zdWJzY3JpYmUoKCk9PntcbiAgICAgICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KHRydWUpO1xuICAgICAgfSwgKGVycm9yKT0+e1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Vycm9yLzAnLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19