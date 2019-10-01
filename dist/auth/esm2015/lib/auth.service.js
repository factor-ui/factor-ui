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
export class AuthService {
    /**
     * @param {?} http
     * @param {?} storageService
     * @param {?} configuration
     */
    constructor(http, storageService, configuration) {
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
    checkLoggedIn() {
        if (this.storageService.get('token', 'localStorage')) {
            this.loggedInSource.next(true);
        }
        else {
            this.loggedInSource.next(false);
        }
        return this.loggedIn;
    }
    /**
     * @return {?}
     */
    getToken() {
        return this.storageService.get('token', 'localStorage');
    }
    /**
     * @param {?} form
     * @return {?}
     */
    login(form) {
        /** @type {?} */
        const params = {
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
        (token) => {
            this.storageService.set('token', token, 'localStorage');
            this.loggedInSource.next(true);
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        this.storageService.delete('token', 'localStorage');
        this.loggedInSource.next(false);
    }
    /**
     * @return {?}
     */
    refreshToken() {
        /** @type {?} */
        const token = this.storageService.get('token', 'localStorage');
        /** @type {?} */
        const url = `${this.configuration.tokenUrl}`;
        /** @type {?} */
        const params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token
        };
        return this.http.get(url, { params: params }).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            this.storageService.set('token', token, 'localStorage');
        })));
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
    { type: StorageService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQU85QyxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBSXRCLFlBQ1UsSUFBZ0IsRUFDaEIsY0FBOEIsRUFDSyxhQUFhO1FBRmhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ0ssa0JBQWEsR0FBYixhQUFhLENBQUE7UUFObEQsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDaEYsYUFBUSxHQUF3QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBT3hFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDaEM7SUFDSCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxFQUFFO1lBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBQ0QsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7O0lBQ0QsS0FBSyxDQUFDLElBQTRDOztjQUMxQyxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDOUMsVUFBVSxFQUFFLFVBQVU7WUFDdEIsYUFBYSxFQUFFLE9BQU87WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUNsQjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ25GLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7Ozs7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDRCxZQUFZOztjQUNKLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDOztjQUN4RCxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRTs7Y0FDdEMsTUFBTSxHQUFHO1lBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUTtZQUN0QyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZO1lBQzlDLFVBQVUsRUFBRSxlQUFlO1lBQzNCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtTQUNuQztRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFO1lBQ3RFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUNOLENBQUM7OztZQTNERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWUSxVQUFVO1lBSVYsY0FBYzs0Q0FjbEIsTUFBTSxTQUFDLHlCQUF5Qjs7Ozs7Ozs7SUFObkMscUNBQXVGOztJQUN2RiwrQkFBMEU7Ozs7O0lBR3hFLDJCQUF3Qjs7Ozs7SUFDeEIscUNBQXNDOzs7OztJQUN0QyxvQ0FBd0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ2ZhY3Rvci11dGlscyc7XG5cbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi9tb2RlbHMvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgbG9nZ2VkSW5Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwdWJsaWMgbG9nZ2VkSW46IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmxvZ2dlZEluU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBASW5qZWN0KCdGYWN0b3JBdXRoQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHtcbiAgICBpZiAodGhpcy5nZXRUb2tlbigpICYmIHRoaXMuZ2V0VG9rZW4oKS5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0xvZ2dlZEluKCkge1xuICAgIGlmICh0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nLCAnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubG9nZ2VkSW47XG4gIH1cbiAgZ2V0VG9rZW4oKTogVG9rZW4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nLCAnbG9jYWxTdG9yYWdlJyk7XG4gIH1cbiAgbG9naW4oZm9ybTogeyB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH0pOiBPYnNlcnZhYmxlPFRva2VuPiB7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgICB1c2VybmFtZTogZm9ybS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkLFxuICAgICAgc3RhdGU6IERhdGUubm93KClcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmNvbmZpZ3VyYXRpb24udG9rZW5VcmwsIHBhcmFtcykucGlwZSh0YXAoKHRva2VuOiBUb2tlbikgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4sICdsb2NhbFN0b3JhZ2UnKTtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICB9KSk7XG4gIH1cbiAgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZGVsZXRlKCd0b2tlbicsICdsb2NhbFN0b3JhZ2UnKTtcbiAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQoZmFsc2UpO1xuICB9XG4gIHJlZnJlc2hUb2tlbigpOiBPYnNlcnZhYmxlPFRva2VuPiB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nLCAnbG9jYWxTdG9yYWdlJyk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsfWA7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgcmVmcmVzaF90b2tlbjogdG9rZW4ucmVmcmVzaF90b2tlblxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUodGFwKCh0b2tlbjogVG9rZW4pID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuLCAnbG9jYWxTdG9yYWdlJyk7XG4gICAgfSkpO1xuICB9XG59XG4iXX0=