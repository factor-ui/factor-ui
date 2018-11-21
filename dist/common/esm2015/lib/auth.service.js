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
export class AuthService {
    /**
     * @param {?} http
     * @param {?} injector
     * @param {?} storageService
     * @param {?} environment
     */
    constructor(http, injector, storageService, environment) {
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
    login(formValue) {
        /** @type {?} */
        let body = Object.assign(formValue, {
            grant_type: 'password',
            response_type: 'token',
            client_id: this.environment.oauth.clientId,
            client_secret: this.environment.oauth.clientSecret
        });
        return this.http.post(this.environment.oauth.tokenUrl, body).pipe(tap((token) => {
            this.storageService.set('token', token);
        }));
    }
    /**
     * @param {?=} redirect
     * @return {?}
     */
    logout(redirect) {
        this.router = this.injector.get(Router);
        this.storageService.delete('token');
        this.loggedInSource.next(false);
        this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
    }
    /**
     * @return {?}
     */
    getConfiguration() {
        return this.http.get(this.environment.configurationUrl).pipe(tap((response) => {
            this.loggedInSource.next(true);
            this.configurationSource.next(response);
            //Save last user loggedIn
            this.storageService.set('lastUser', {
                username: response.user.username,
                picture: response.picture
            }, localStorage);
        }));
    }
    /**
     * @return {?}
     */
    getToken() {
        return this.storageService.get('token');
    }
    /**
     * @return {?}
     */
    checkAuth() {
        if (this.getToken()) {
            /** @type {?} */
            let config = this.getConfiguration().subscribe(() => {
                this.loggedInSource.next(true);
            }, (error) => {
                if (error.status == 0) {
                    this.router = this.injector.get(Router);
                    this.router.navigateByUrl('/error/0', { skipLocationChange: true });
                }
            });
            return config;
        }
        else {
            return false;
        }
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
    { type: undefined, decorators: [{ type: Inject, args: ['environment',] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i0.INJECTOR), i0.inject(i2.StorageService), i0.inject("environment")); }, token: AuthService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9hdXRoLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUtuRCxNQUFNLE9BQU8sV0FBVzs7Ozs7OztJQU90QixZQUNVLElBQWdCLEVBQ2hCLFFBQWtCLEVBQ2xCLGNBQThCLEVBQ1AsV0FBVztRQUhsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ1AsZ0JBQVcsR0FBWCxXQUFXLENBQUE7UUFWcEMsbUJBQWMsR0FBNkIsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFDdkYsY0FBUyxHQUF3QixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVELHdCQUFtQixHQUF5QixJQUFJLGVBQWUsQ0FBTSxLQUFLLENBQUMsQ0FBQztRQUNwRixtQkFBYyxHQUFvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUM7SUFRdEUsQ0FBQzs7Ozs7SUFFTCxLQUFLLENBQUMsU0FBaUQ7O1lBQ2pELElBQUksR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUMxQyxVQUFVLEVBQUUsVUFBVTtZQUN0QixhQUFhLEVBQUUsT0FBTztZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUTtZQUMxQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWTtTQUNuRCxDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ25GLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7Ozs7SUFDRCxNQUFNLENBQUMsUUFBaUI7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUEsQ0FBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFDRCxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBYSxFQUFFLEVBQUU7WUFDakYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4Qyx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNsQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRO2dCQUNoQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87YUFDMUIsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ04sQ0FBQzs7OztJQUNELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7SUFDRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7O2dCQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUMsRUFBRTtnQkFDVixJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO29CQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2lCQUNyRTtZQUNILENBQUMsQ0FBQztZQUNGLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBSTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOzs7WUE5REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEsVUFBVTtZQURFLFFBQVE7WUFNcEIsY0FBYzs0Q0FnQmxCLE1BQU0sU0FBQyxhQUFhOzs7Ozs7OztJQVZ2QixxQ0FBdUY7O0lBQ3ZGLGdDQUFvRTs7Ozs7SUFDcEUsMENBQW9GOztJQUNwRixxQ0FBMEU7O0lBQzFFLDZCQUFlOzs7OztJQUdiLDJCQUF3Qjs7Ozs7SUFDeEIsK0JBQTBCOzs7OztJQUMxQixxQ0FBc0M7Ozs7O0lBQ3RDLGtDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3N0b3JhZ2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsb2dnZWRJblNvdXJjZTogQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG4gIGxvZ2dlZEluJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMubG9nZ2VkSW5Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIHByaXZhdGUgY29uZmlndXJhdGlvblNvdXJjZTogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4oZmFsc2UpO1xuICBjb25maWd1cmF0aW9uJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5jb25maWd1cmF0aW9uU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICByb3V0ZXI6IFJvdXRlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50XG4gICkgeyB9XG5cbiAgbG9naW4oZm9ybVZhbHVlOiB7IHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcgfSkge1xuICAgIGxldCBib2R5OiBvYmplY3QgPSBPYmplY3QuYXNzaWduKGZvcm1WYWx1ZSwge1xuICAgICAgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgIHJlc3BvbnNlX3R5cGU6ICd0b2tlbicsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuZW52aXJvbm1lbnQub2F1dGguY2xpZW50SWQsXG4gICAgICBjbGllbnRfc2VjcmV0OiB0aGlzLmVudmlyb25tZW50Lm9hdXRoLmNsaWVudFNlY3JldFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLmVudmlyb25tZW50Lm9hdXRoLnRva2VuVXJsLCBib2R5KS5waXBlKHRhcCgodG9rZW46IGFueSkgPT4ge1xuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4pO1xuICAgIH0pKTtcbiAgfVxuICBsb2dvdXQocmVkaXJlY3Q/OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgdGhpcy5zdG9yYWdlU2VydmljZS5kZWxldGUoJ3Rva2VuJyk7XG4gICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbicsIHJlZGlyZWN0PyB7cmVkaXJlY3Q6cmVkaXJlY3R9IDoge31dKTtcbiAgfVxuICBnZXRDb25maWd1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuZW52aXJvbm1lbnQuY29uZmlndXJhdGlvblVybCkucGlwZSh0YXAoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvblNvdXJjZS5uZXh0KHJlc3BvbnNlKTtcbiAgICAgIC8vU2F2ZSBsYXN0IHVzZXIgbG9nZ2VkSW5cbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCdsYXN0VXNlcicsIHtcbiAgICAgICAgdXNlcm5hbWU6IHJlc3BvbnNlLnVzZXIudXNlcm5hbWUsXG4gICAgICAgIHBpY3R1cmU6IHJlc3BvbnNlLnBpY3R1cmVcbiAgICAgIH0sIGxvY2FsU3RvcmFnZSk7XG4gICAgfSkpO1xuICB9XG4gIGdldFRva2VuKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nKTtcbiAgfVxuICBjaGVja0F1dGgoKSB7XG4gICAgaWYgKHRoaXMuZ2V0VG9rZW4oKSkge1xuICAgICAgbGV0IGNvbmZpZyA9IHRoaXMuZ2V0Q29uZmlndXJhdGlvbigpLnN1YnNjcmliZSgoKT0+e1xuICAgICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgICB9LCAoZXJyb3IpPT57XG4gICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT0gMCkge1xuICAgICAgICAgIHRoaXMucm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvZXJyb3IvMCcsIHsgc2tpcExvY2F0aW9uQ2hhbmdlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfWVsc2V7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=