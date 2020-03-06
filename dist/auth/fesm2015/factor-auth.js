import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap, catchError, filter, take, switchMap, finalize, share } from 'rxjs/operators';
import { StorageService } from 'factor-utils';
import { Inject, Injectable, Injector, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JwtService {
    /**
     * @param {?} http
     * @param {?} storageService
     * @param {?} configuration
     * @param {?} injector
     */
    constructor(http, storageService, configuration, injector) {
        this.http = http;
        this.storageService = storageService;
        this.configuration = configuration;
        this.injector = injector;
        this.loggedInSource = new BehaviorSubject(false);
        this.loggedIn = this.loggedInSource.asObservable();
        this.tokenKey = 'auth_jwt';
        this.checkLoggedIn();
    }
    /**
     * @param {?} request
     * @return {?}
     */
    addAuthenticationToken(request) {
        /** @type {?} */
        const token = this.getToken();
        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!token || request.url.includes("token")) {
            return request;
        }
        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
    }
    /**
     * @return {?}
     */
    checkLoggedIn() {
        if (this.getToken()) {
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
        return this.storageService.get(this.tokenKey, 'local');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    login(data) {
        return this.http.post(this.configuration.tokenUrl, data).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        (token) => {
            this.storageService.set(this.tokenKey, token.token, 'local');
            this.loggedInSource.next(true);
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        this.storageService.delete(this.tokenKey, 'local');
        this.loggedInSource.next(false);
        if (this.configuration.nosessionUrl) {
            /** @type {?} */
            const router = this.injector.get(Router);
            router.navigateByUrl(this.configuration.nosessionUrl);
        }
    }
}
JwtService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JwtService.ctorParameters = () => [
    { type: HttpClient },
    { type: StorageService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] },
    { type: Injector }
];
/** @nocollapse */ JwtService.ngInjectableDef = defineInjectable({ factory: function JwtService_Factory() { return new JwtService(inject(HttpClient), inject(StorageService), inject("FactorAuthConfiguration"), inject(INJECTOR)); }, token: JwtService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OAuthService {
    /**
     * @param {?} http
     * @param {?} storageService
     * @param {?} configuration
     * @param {?} injector
     */
    constructor(http, storageService, configuration, injector) {
        this.http = http;
        this.storageService = storageService;
        this.configuration = configuration;
        this.injector = injector;
        this.loggedInSource = new BehaviorSubject(false);
        this.loggedIn = this.loggedInSource.asObservable();
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
        this.checkLoggedIn();
    }
    /**
     * @param {?} request
     * @return {?}
     */
    addAuthenticationToken(request) {
        /** @type {?} */
        const token = this.getToken();
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
    /**
     * @return {?}
     */
    checkLoggedIn() {
        if (this.getToken()) {
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
        return this.storageService.get('token', 'local');
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
            return this.refreshToken().pipe(switchMap((/**
             * @param {?} newToken
             * @return {?}
             */
            (newToken) => {
                if (newToken) {
                    this.refreshTokenSubject.next(newToken);
                    return next.handle(this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                this.logout();
                return throwError('');
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => {
                // If there is an exception calling 'refreshToken', bad news so logout.
                this.logout();
                return throwError(error);
            })), share(), finalize((/**
             * @return {?}
             */
            () => {
                this.refreshTokenInProgress = false;
            })));
        }
        else {
            return this.refreshTokenSubject.pipe(filter((/**
             * @param {?} token
             * @return {?}
             */
            token => token != null)), take(1), switchMap((/**
             * @param {?} token
             * @return {?}
             */
            token => {
                return next.handle(this.addAuthenticationToken(request));
            })));
        }
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
            this.storageService.set('token', token, 'local');
            this.loggedInSource.next(true);
        })));
    }
    /**
     * @return {?}
     */
    logout() {
        this.storageService.delete('token', 'local');
        this.loggedInSource.next(false);
        if (this.configuration.nosessionUrl) {
            /** @type {?} */
            const router = this.injector.get(Router);
            router.navigateByUrl(this.configuration.nosessionUrl);
        }
    }
    /**
     * @return {?}
     */
    refreshToken() {
        /** @type {?} */
        const token = this.getToken();
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
            this.storageService.set('token', token, 'local');
            this.loggedInSource.next(true);
        })));
    }
}
OAuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
OAuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: StorageService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] },
    { type: Injector }
];
/** @nocollapse */ OAuthService.ngInjectableDef = defineInjectable({ factory: function OAuthService_Factory() { return new OAuthService(inject(HttpClient), inject(StorageService), inject("FactorAuthConfiguration"), inject(INJECTOR)); }, token: OAuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} http
     * @param {?} storageService
     * @param {?} jwtService
     * @param {?} oauthService
     * @param {?} configuration
     */
    constructor(http, storageService, jwtService, oauthService, configuration) {
        this.http = http;
        this.storageService = storageService;
        this.jwtService = jwtService;
        this.oauthService = oauthService;
        this.configuration = configuration;
        this.getProvider().checkLoggedIn();
    }
    /**
     * @return {?}
     */
    getProvider() {
        return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
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
    { type: JwtService },
    { type: OAuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
/** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(HttpClient), inject(StorageService), inject(JwtService), inject(OAuthService), inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthInterceptor {
    /**
     * @param {?} injector
     * @param {?} configuration
     */
    constructor(injector, configuration) {
        this.injector = injector;
        this.configuration = configuration;
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
        return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            if (error instanceof HttpErrorResponse) {
                switch (((/** @type {?} */ (error))).status) {
                    case 401:
                        if (this.authService.getProvider().handle401Error !== 'undefined') {
                            return this.authService.getProvider().handle401Error(request, next);
                        }
                        else {
                            this.authService.getProvider().logout();
                            return throwError(error);
                        }
                        break;
                    default:
                        return throwError(error);
                        break;
                }
            }
            else {
                return throwError(error);
            }
        })));
    }
}
AuthInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
AuthInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} authService
     * @param {?} configuration
     */
    constructor(authService, configuration) {
        this.authService = authService;
        this.configuration = configuration;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (this.authService.getProvider().getToken()) {
            return true;
        }
        else {
            this.authService.getProvider().logout();
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
    { type: AuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(AuthService), inject("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginGuard {
    /**
     * @param {?} authService
     * @param {?} router
     * @param {?} configuration
     */
    constructor(authService, router, configuration) {
        this.authService = authService;
        this.router = router;
        this.configuration = configuration;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (this.authService.getProvider().getToken()) {
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
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
/** @nocollapse */ LoginGuard.ngInjectableDef = defineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(inject(AuthService), inject(Router), inject("FactorAuthConfiguration")); }, token: LoginGuard, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthModule, AuthGuard, AuthService, LoginGuard, AuthInterceptor as ɵa, JwtService as ɵb, OAuthService as ɵc };

//# sourceMappingURL=factor-auth.js.map