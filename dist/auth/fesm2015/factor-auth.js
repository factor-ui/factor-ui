import { StorageService } from 'factor-utils';
import { Router } from '@angular/router';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';
import { Injectable, Injector, Inject, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';
import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
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
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(HttpClient), inject(INJECTOR), inject(StorageService), inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (this.authService.getToken()) {
            //TODO Verify session on server with Observable
            return true;
        }
        else {
            this.authService.logout(state.url);
            return false;
        }
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthService }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(AuthService)); }, token: AuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginGuard {
    /**
     * @param {?} authService
     * @param {?} router
     */
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (this.authService.getToken()) {
            this.router.navigateByUrl('/');
            return false;
        }
        else {
            return true;
        }
    }
}
LoginGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
LoginGuard.ctorParameters = () => [
    { type: AuthService },
    { type: Router }
];
/** @nocollapse */ LoginGuard.ngInjectableDef = defineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(inject(AuthService), inject(Router)); }, token: LoginGuard, providedIn: "root" });

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
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        this.authService = this.injector.get(AuthService);
        return next.handle(this.addAuthenticationToken(request)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                switch (((/** @type {?} */ (error))).status) {
                    case 401:
                        return this.handle401Error(request, next);
                        break;
                    default:
                        return throwError(error);
                        break;
                }
            }
            else {
                return throwError(error);
            }
        }));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    handle401Error(request, next) {
        if (!this.refreshTokenInProgress) {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(switchMap((newToken) => {
                if (newToken) {
                    this.refreshTokenSubject.next(newToken);
                    return next.handle(this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                this.authService.logout();
                return throwError('');
            }), catchError(error => {
                // If there is an exception calling 'refreshToken', bad news so logout.
                this.authService.logout();
                return throwError(error);
            }), share(), finalize(() => {
                this.refreshTokenInProgress = false;
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(filter(token => token != null), take(1), switchMap(token => {
                return next.handle(this.addAuthenticationToken(request));
            }));
        }
    }
    /**
     * @param {?} request
     * @return {?}
     */
    addAuthenticationToken(request) {
        /** @type {?} */
        const token = this.authService.getToken();
        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!token || request.url.includes("token")) {
            return request;
        }
        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: `${token.token_type} ${token.access_token}`
            }
        });
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
class AuthModule {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: 'FactorAuthConfiguration', useValue: configuration }
            ]
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthService, AuthGuard, LoginGuard, AuthInterceptor, AuthModule };

//# sourceMappingURL=factor-auth.js.map