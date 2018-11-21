import { Injectable, Injector, NgModule, Inject, defineInjectable, inject, INJECTOR } from '@angular/core';
import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorageService {
    constructor() { }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    delete(key, storage) {
        if (storage) {
            delete storage[key];
        }
        else {
            delete sessionStorage[key];
        }
    }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    get(key, storage) {
        /** @type {?} */
        let parsedValue;
        /** @type {?} */
        let value = storage ? storage[key] : sessionStorage[key];
        if (value) {
            try {
                parsedValue = JSON.parse(value);
            }
            catch (err) {
                parsedValue = value;
            }
        }
        return parsedValue;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} storage
     * @return {?}
     */
    set(key, value, storage) {
        if (storage) {
            storage[key] = JSON.stringify(value);
        }
        else {
            sessionStorage[key] = JSON.stringify(value);
        }
    }
}
StorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StorageService.ctorParameters = () => [];
/** @nocollapse */ StorageService.ngInjectableDef = defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
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
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(HttpClient), inject(INJECTOR), inject(StorageService), inject("environment")); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthInterceptor {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        this.authService = this.injector.get(AuthService);
        /** @type {?} */
        let token = this.authService.getToken();
        if (token) {
            request = request.clone({
                headers: request.headers.set('Authorization', `${token.token_type} ${token.access_token}`)
            });
        }
        return next.handle(request).pipe(tap(event => { }, err => {
            if (err instanceof HttpErrorResponse) {
                if (err.status == 401) {
                    this.authService.logout();
                }
            }
        }));
    }
}
AuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthInterceptor.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CommonModule {
    /**
     * @param {?} environment
     * @return {?}
     */
    static forRoot(environment) {
        return {
            ngModule: CommonModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: 'environment', useValue: environment }
            ]
        };
    }
}
CommonModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleAnalyticsService {
    /**
     * @param {?} router
     * @param {?} environment
     */
    constructor(router, environment) {
        this.router = router;
        this.environment = environment;
        router.events.subscribe(event => {
            try {
                if (typeof gtag === 'function') {
                    if (event instanceof NavigationEnd) {
                        setTimeout(() => {
                            gtag('config', this.environment.googleAnalytics.trackingId, {
                                'page_title': document.title,
                                'page_path': event.urlAfterRedirects
                            });
                        }, 100);
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    /**
     * @return {?}
     */
    appendTrackingCode() {
        try {
            if (this.environment.googleAnalytics && this.environment.googleAnalytics.trackingId) {
                /** @type {?} */
                const s1 = document.createElement('script');
                s1.async = true;
                s1.src = `https://www.googletagmanager.com/gtag/js?id=${this.environment.googleAnalytics.trackingId}`;
                document.head.appendChild(s1);
                /** @type {?} */
                const s2 = document.createElement('script');
                s2.innerHTML = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${this.environment.googleAnalytics.trackingId}');
       `;
                document.head.appendChild(s2);
            }
        }
        catch (ex) {
            console.error('Error appending google analytics');
            console.error(ex);
        }
    }
    /**
     * @param {?} action
     * @param {?=} category
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    setEvent(action, category = null, label = null, value = null) {
        if (typeof gtag === 'function') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUserId(userId) {
        if (typeof gtag === 'function') {
            gtag('set', { 'user_id': userId });
        }
    }
}
GoogleAnalyticsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleAnalyticsService.ctorParameters = () => [
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['environment',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthInterceptor, AuthService, CommonModule, GoogleAnalyticsService, StorageService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yLWNvbW1vbi5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vZmFjdG9yLWNvbW1vbi9saWIvc3RvcmFnZS5zZXJ2aWNlLnRzIiwibmc6Ly9mYWN0b3ItY29tbW9uL2xpYi9hdXRoLnNlcnZpY2UudHMiLCJuZzovL2ZhY3Rvci1jb21tb24vbGliL2F1dGgtaW50ZXJjZXB0b3IudHMiLCJuZzovL2ZhY3Rvci1jb21tb24vbGliL2NvbW1vbi5tb2R1bGUudHMiLCJuZzovL2ZhY3Rvci1jb21tb24vbGliL2dvb2dsZS1hbmFseXRpY3Muc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGRlbGV0ZShrZXk6IHN0cmluZywgc3RvcmFnZT8pIHtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgZGVsZXRlIHN0b3JhZ2Vba2V5XTtcbiAgICB9ZWxzZXtcbiAgICAgIGRlbGV0ZSBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgIH1cbiAgfVxuICBnZXQoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/KSB7XG4gICAgbGV0IHBhcnNlZFZhbHVlO1xuICAgIGxldCB2YWx1ZSA9IHN0b3JhZ2UgPyBzdG9yYWdlW2tleV0gOiBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkVmFsdWU7XG4gIH1cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPykge1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICBzdG9yYWdlW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlc3Npb25TdG9yYWdlW2tleV0gPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIHByaXZhdGUgbG9nZ2VkSW5Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBsb2dnZWRJbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmxvZ2dlZEluU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICBwcml2YXRlIGNvbmZpZ3VyYXRpb25Tb3VyY2U6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KGZhbHNlKTtcbiAgY29uZmlndXJhdGlvbiQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuY29uZmlndXJhdGlvblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcm91dGVyOiBSb3V0ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ2Vudmlyb25tZW50JykgcHJpdmF0ZSBlbnZpcm9ubWVudFxuICApIHsgfVxuXG4gIGxvZ2luKGZvcm1WYWx1ZTogeyB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nIH0pIHtcbiAgICBsZXQgYm9keTogb2JqZWN0ID0gT2JqZWN0LmFzc2lnbihmb3JtVmFsdWUsIHtcbiAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICByZXNwb25zZV90eXBlOiAndG9rZW4nLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmVudmlyb25tZW50Lm9hdXRoLmNsaWVudElkLFxuICAgICAgY2xpZW50X3NlY3JldDogdGhpcy5lbnZpcm9ubWVudC5vYXV0aC5jbGllbnRTZWNyZXRcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5lbnZpcm9ubWVudC5vYXV0aC50b2tlblVybCwgYm9keSkucGlwZSh0YXAoKHRva2VuOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuc3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuKTtcbiAgICB9KSk7XG4gIH1cbiAgbG9nb3V0KHJlZGlyZWN0Pzogc3RyaW5nKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgIHRoaXMuc3RvcmFnZVNlcnZpY2UuZGVsZXRlKCd0b2tlbicpO1xuICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dChmYWxzZSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nLCByZWRpcmVjdD8ge3JlZGlyZWN0OnJlZGlyZWN0fSA6IHt9XSk7XG4gIH1cbiAgZ2V0Q29uZmlndXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmVudmlyb25tZW50LmNvbmZpZ3VyYXRpb25VcmwpLnBpcGUodGFwKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQodHJ1ZSk7XG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2UubmV4dChyZXNwb25zZSk7XG4gICAgICAvL1NhdmUgbGFzdCB1c2VyIGxvZ2dlZEluXG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgnbGFzdFVzZXInLCB7XG4gICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS51c2VyLnVzZXJuYW1lLFxuICAgICAgICBwaWN0dXJlOiByZXNwb25zZS5waWN0dXJlXG4gICAgICB9LCBsb2NhbFN0b3JhZ2UpO1xuICAgIH0pKTtcbiAgfVxuICBnZXRUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJyk7XG4gIH1cbiAgY2hlY2tBdXRoKCkge1xuICAgIGlmICh0aGlzLmdldFRva2VuKCkpIHtcbiAgICAgIGxldCBjb25maWcgPSB0aGlzLmdldENvbmZpZ3VyYXRpb24oKS5zdWJzY3JpYmUoKCk9PntcbiAgICAgICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KHRydWUpO1xuICAgICAgfSwgKGVycm9yKT0+e1xuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09IDApIHtcbiAgICAgICAgICB0aGlzLnJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2Vycm9yLzAnLCB7IHNraXBMb2NhdGlvbkNoYW5nZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1lbHNle1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFdmVudCwgSHR0cEludGVyY2VwdG9yLCBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEludGVyY2VwdG9yIHtcbiAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7IH1cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgdGhpcy5hdXRoU2VydmljZSA9IHRoaXMuaW5qZWN0b3IuZ2V0KEF1dGhTZXJ2aWNlKTtcbiAgICBsZXQgdG9rZW4gPSB0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIGhlYWRlcnM6IHJlcXVlc3QuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgJHt0b2tlbi50b2tlbl90eXBlfSAke3Rva2VuLmFjY2Vzc190b2tlbn1gKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKGV2ZW50ID0+IHsgfSwgZXJyID0+IHtcbiAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKGVyci5zdGF0dXMgPT0gNDAxKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmltcG9ydCB7IEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vYXV0aC1pbnRlcmNlcHRvcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBDb21tb25Nb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoZW52aXJvbm1lbnQ6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBBdXRoSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgICAgIHsgcHJvdmlkZTogJ2Vudmlyb25tZW50JywgdXNlVmFsdWU6IGVudmlyb25tZW50IH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIGd0YWc6IEZ1bmN0aW9uO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcbiAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnRcbiAgKSB7XG4gICAgcm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBndGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICBndGFnKCdjb25maWcnLCB0aGlzLmVudmlyb25tZW50Lmdvb2dsZUFuYWx5dGljcy50cmFja2luZ0lkLCB7XG4gICAgICAgICAgICAgICAgJ3BhZ2VfdGl0bGUnOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgICAgICAgICAncGFnZV9wYXRoJzogZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHNcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgYXBwZW5kVHJhY2tpbmdDb2RlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MgJiYgdGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZCkge1xuICAgICAgICBjb25zdCBzMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzMS5hc3luYyA9IHRydWU7XG4gICAgICAgIHMxLnNyYyA9IGBodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7dGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZH1gO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMxKTtcbiAgICAgICAgY29uc3QgczIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgczIuaW5uZXJIVE1MID0gYFxuICAgICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgZ3RhZygnY29uZmlnJywgJyR7dGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZH0nKTtcbiAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMyKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYXBwZW5kaW5nIGdvb2dsZSBhbmFseXRpY3MnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXgpO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0RXZlbnQoYWN0aW9uOiBzdHJpbmcsIGNhdGVnb3J5OiBzdHJpbmcgPSBudWxsLCBsYWJlbDogc3RyaW5nID0gbnVsbCwgdmFsdWU6IG51bWJlciA9IG51bGwpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIGd0YWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XG4gICAgICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBwdWJsaWMgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBndGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBndGFnKCdzZXQnLCB7ICd1c2VyX2lkJzogdXNlcklkIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUthLGNBQWM7SUFFekIsaUJBQWlCOzs7Ozs7SUFFakIsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUFRO1FBQzFCLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDckI7YUFBSTtZQUNILE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO0tBQ0Y7Ozs7OztJQUNELEdBQUcsQ0FBQyxHQUFXLEVBQUUsT0FBUTs7WUFDbkIsV0FBVzs7WUFDWCxLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3hELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSTtnQkFDRixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDO0tBQ3BCOzs7Ozs7O0lBQ0QsR0FBRyxDQUFDLEdBQVcsRUFBRSxLQUFVLEVBQUUsT0FBUTtRQUNuQyxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDTCxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QztLQUNGOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQsTUFXYSxXQUFXOzs7Ozs7O0lBT3RCLFlBQ1UsSUFBZ0IsRUFDaEIsUUFBa0IsRUFDbEIsY0FBOEIsRUFDUCxXQUFX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