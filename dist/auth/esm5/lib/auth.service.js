/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from "rxjs";
import { tap } from 'rxjs/operators';
import { StorageService } from 'factor-utils';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "factor-utils";
var AuthService = /** @class */ (function () {
    function AuthService(http, storageService, configuration) {
        this.http = http;
        this.storageService = storageService;
        this.configuration = configuration;
        this.loggedInSource = new BehaviorSubject(false);
        this.loggedIn = this.loggedInSource.asObservable();
        if (this.getToken() && this.getToken().access_token) {
            this.loggedInSource.next(true);
        }
    }
    /**
     * @return {?}
     */
    AuthService.prototype.checkLoggedIn = /**
     * @return {?}
     */
    function () {
        if (this.storageService.get('token', 'localStorage')) {
            this.loggedInSource.next(true);
        }
        else {
            this.loggedInSource.next(false);
        }
        return this.loggedIn;
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.get('token', 'localStorage');
    };
    /**
     * @param {?} form
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} form
     * @return {?}
     */
    function (form) {
        var _this = this;
        /** @type {?} */
        var params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'password',
            response_type: 'token',
            username: form.username,
            password: form.password,
            state: Date.now()
        };
        return this.http.post(this.configuration.tokenUrl, params).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.storageService.set('token', token, 'localStorage');
            _this.loggedInSource.next(true);
        })));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.storageService.delete('token', 'localStorage');
        this.loggedInSource.next(false);
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
        var token = this.storageService.get('token', 'localStorage');
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
            _this.storageService.set('token', token, 'localStorage');
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
        { type: StorageService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
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
    AuthService.prototype.loggedIn;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.http;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUk5QztJQU9FLHFCQUNVLElBQWdCLEVBQ2hCLGNBQThCLEVBQ0ssYUFBYTtRQUZoRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUNLLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBTmxELG1CQUFjLEdBQTZCLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLGFBQVEsR0FBd0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQU94RSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsWUFBWSxFQUFFO1lBQ25ELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0lBQ0gsQ0FBQzs7OztJQUVELG1DQUFhOzs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ0QsOEJBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFDRCwyQkFBSzs7OztJQUFMLFVBQU0sSUFBNEM7UUFBbEQsaUJBY0M7O1lBYk8sTUFBTSxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUN0QyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQzlDLFVBQVUsRUFBRSxVQUFVO1lBQ3RCLGFBQWEsRUFBRSxPQUFPO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FDbEI7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFZO1lBQy9FLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFDRCw0QkFBTTs7O0lBQU47UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUNELGtDQUFZOzs7SUFBWjtRQUFBLGlCQVlDOztZQVhPLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDOztZQUN4RCxHQUFHLEdBQUcsS0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVU7O1lBQ3RDLE1BQU0sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDdEMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUM5QyxVQUFVLEVBQUUsZUFBZTtZQUMzQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxLQUFZO1lBQ2xFLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7O2dCQTNERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZRLFVBQVU7Z0JBSVYsY0FBYztnREFjbEIsTUFBTSxTQUFDLHlCQUF5Qjs7O3NCQW5CckM7Q0FxRUMsQUE1REQsSUE0REM7U0F6RFksV0FBVzs7Ozs7O0lBQ3RCLHFDQUF1Rjs7SUFDdkYsK0JBQTBFOzs7OztJQUd4RSwyQkFBd0I7Ozs7O0lBQ3hCLHFDQUFzQzs7Ozs7SUFDdEMsb0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdmYWN0b3ItdXRpbHMnO1xuXG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vbW9kZWxzL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGxvZ2dlZEluU291cmNlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgcHVibGljIGxvZ2dlZEluOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5sb2dnZWRJblNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7XG4gICAgaWYgKHRoaXMuZ2V0VG9rZW4oKSAmJiB0aGlzLmdldFRva2VuKCkuYWNjZXNzX3Rva2VuKSB7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2hlY2tMb2dnZWRJbigpIHtcbiAgICBpZiAodGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgJ2xvY2FsU3RvcmFnZScpKSB7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dChmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvZ2dlZEluO1xuICB9XG4gIGdldFRva2VuKCk6IFRva2VuIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgJ2xvY2FsU3RvcmFnZScpO1xuICB9XG4gIGxvZ2luKGZvcm06IHsgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9KTogT2JzZXJ2YWJsZTxUb2tlbj4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudFNlY3JldCxcbiAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgdXNlcm5hbWU6IGZvcm0udXNlcm5hbWUsXG4gICAgICBwYXNzd29yZDogZm9ybS5wYXNzd29yZCxcbiAgICAgIHN0YXRlOiBEYXRlLm5vdygpXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsLCBwYXJhbXMpLnBpcGUodGFwKCh0b2tlbjogVG9rZW4pID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuLCAnbG9jYWxTdG9yYWdlJyk7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgfSkpO1xuICB9XG4gIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmRlbGV0ZSgndG9rZW4nLCAnbG9jYWxTdG9yYWdlJyk7XG4gICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KGZhbHNlKTtcbiAgfVxuICByZWZyZXNoVG9rZW4oKTogT2JzZXJ2YWJsZTxUb2tlbj4ge1xuICAgIGNvbnN0IHRva2VuID0gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgJ2xvY2FsU3RvcmFnZScpO1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuY29uZmlndXJhdGlvbi50b2tlblVybH1gO1xuICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgIGNsaWVudF9pZDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5jb25maWd1cmF0aW9uLmNsaWVudFNlY3JldCxcbiAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICAgIHJlZnJlc2hfdG9rZW46IHRva2VuLnJlZnJlc2hfdG9rZW5cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KS5waXBlKHRhcCgodG9rZW46IFRva2VuKSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbiwgJ2xvY2FsU3RvcmFnZScpO1xuICAgIH0pKTtcbiAgfVxufVxuIl19