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
        return this.http.post(this.configuration.tokenUrl, params).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            this.storageService.set('token', token, localStorage);
            this.loggedInSource.next(true);
            if (redirect) {
                this.router.navigate([redirect]);
            }
        })));
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
        return this.http.get(url, { params: params }).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            this.storageService.set('token', token, localStorage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7O0FBSzlDLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBS3RCLFlBQ1UsSUFBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDSyxhQUFhO1FBSGhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDSyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQVJsRCxtQkFBYyxHQUE2QixJQUFJLGVBQWUsQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUNoRixjQUFTLEdBQXdCLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRdkUsQ0FBQzs7Ozs7O0lBRUwsS0FBSyxDQUFDLElBQVMsRUFBRSxRQUFpQjtRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7O2NBQ2pELE1BQU0sR0FBRztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVE7WUFDdEMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUM5QyxVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsT0FBTztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDakYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFDbEM7UUFDSCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFDRCxNQUFNLENBQUMsUUFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7OztJQUNELFlBQVk7O2NBQ0osS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUM7O2NBQ3RELEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFOztjQUN0QyxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRO1lBQ3RDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDOUMsVUFBVSxFQUFFLGVBQWU7WUFDM0IsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRzs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7O1lBdERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRRLFVBQVU7WUFERSxRQUFRO1lBTXBCLGNBQWM7NENBY2xCLE1BQU0sU0FBQyx5QkFBeUI7Ozs7Ozs7O0lBUm5DLHFDQUF1Rjs7SUFDdkYsZ0NBQTJFOzs7OztJQUMzRSw2QkFBdUI7Ozs7O0lBR3JCLDJCQUF3Qjs7Ozs7SUFDeEIsK0JBQTBCOzs7OztJQUMxQixxQ0FBc0M7Ozs7O0lBQ3RDLG9DQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdmYWN0b3ItdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgbG9nZ2VkSW5Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBwdWJsaWMgbG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5sb2dnZWRJblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBsb2dpbihmb3JtOiBhbnksIHJlZGlyZWN0Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMucm91dGVyIHx8IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgICB1c2VybmFtZTogZm9ybS51c2VybmFtZSxcbiAgICAgIHBhc3N3b3JkOiBmb3JtLnBhc3N3b3JkXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsLCBwYXJhbXMpLnBpcGUodGFwKCh0b2tlbjogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbiwgbG9jYWxTdG9yYWdlKTtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbcmVkaXJlY3RdKTtcbiAgICAgIH1cbiAgICB9KSk7XG4gIH1cbiAgbG9nb3V0KHJlZGlyZWN0Pzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLnJvdXRlciB8fCB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZGVsZXRlKCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbicsIHJlZGlyZWN0ID8geyByZWRpcmVjdDogcmVkaXJlY3QgfSA6IHt9XSk7XG4gIH1cbiAgZ2V0VG9rZW4oKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJywgbG9jYWxTdG9yYWdlKTtcbiAgfVxuICByZWZyZXNoVG9rZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicsIGxvY2FsU3RvcmFnZSk7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5jb25maWd1cmF0aW9uLnRva2VuVXJsfWA7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgY2xpZW50X2lkOiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmNvbmZpZ3VyYXRpb24uY2xpZW50U2VjcmV0LFxuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgcmVmcmVzaF90b2tlbjogdG9rZW4ucmVmcmVzaF90b2tlblxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUodGFwKCh0b2tlbjogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbiwgbG9jYWxTdG9yYWdlKTtcbiAgICB9KSk7XG4gIH1cbn1cbiJdfQ==