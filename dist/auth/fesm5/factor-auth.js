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
var JwtService = /** @class */ (function () {
    function JwtService(http, storageService, configuration, injector) {
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
    JwtService.prototype.addAuthenticationToken = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var token = this.getToken();
        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!token || request.url.includes("token")) {
            return request;
        }
        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: "Bearer " + token
            }
        });
    };
    /**
     * @return {?}
     */
    JwtService.prototype.checkLoggedIn = /**
     * @return {?}
     */
    function () {
        if (this.getToken()) {
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
    JwtService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.get(this.tokenKey, 'local');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    JwtService.prototype.login = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        return this.http.post(this.configuration.tokenUrl, data).pipe(tap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            _this.storageService.set(_this.tokenKey, token.token, 'local');
            _this.loggedInSource.next(true);
        })));
    };
    /**
     * @return {?}
     */
    JwtService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.storageService.delete(this.tokenKey, 'local');
        this.loggedInSource.next(false);
        if (this.configuration.nosessionUrl) {
            /** @type {?} */
            var router = this.injector.get(Router);
            router.navigateByUrl(this.configuration.nosessionUrl);
        }
    };
    JwtService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JwtService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: StorageService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] },
        { type: Injector }
    ]; };
    /** @nocollapse */ JwtService.ngInjectableDef = defineInjectable({ factory: function JwtService_Factory() { return new JwtService(inject(HttpClient), inject(StorageService), inject("FactorAuthConfiguration"), inject(INJECTOR)); }, token: JwtService, providedIn: "root" });
    return JwtService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var OAuthService = /** @class */ (function () {
    function OAuthService(http, storageService, configuration, injector) {
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
    OAuthService.prototype.addAuthenticationToken = /**
     * @param {?} request
     * @return {?}
     */
    function (request) {
        /** @type {?} */
        var token = this.getToken();
        // If access token is null this means that user is not logged in
        // And we return the original request
        if (!token || request.url.includes("token")) {
            return request;
        }
        // We clone the request, because the original request is immutable
        return request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token
            }
        });
    };
    /**
     * @return {?}
     */
    OAuthService.prototype.checkLoggedIn = /**
     * @return {?}
     */
    function () {
        if (this.getToken()) {
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
    OAuthService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return this.storageService.get('token', 'local');
    };
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    OAuthService.prototype.handle401Error = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        if (!this.refreshTokenInProgress) {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.refreshToken().pipe(switchMap((/**
             * @param {?} newToken
             * @return {?}
             */
            function (newToken) {
                if (newToken) {
                    _this.refreshTokenSubject.next(newToken);
                    return next.handle(_this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                _this.logout();
                return throwError('');
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                // If there is an exception calling 'refreshToken', bad news so logout.
                _this.logout();
                return throwError(error);
            })), share(), finalize((/**
             * @return {?}
             */
            function () {
                _this.refreshTokenInProgress = false;
            })));
        }
        else {
            return this.refreshTokenSubject.pipe(filter((/**
             * @param {?} token
             * @return {?}
             */
            function (token) { return token != null; })), take(1), switchMap((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                return next.handle(_this.addAuthenticationToken(request));
            })));
        }
    };
    /**
     * @param {?} form
     * @return {?}
     */
    OAuthService.prototype.login = /**
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
            _this.storageService.set('token', token, 'local');
            _this.loggedInSource.next(true);
        })));
    };
    /**
     * @return {?}
     */
    OAuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.storageService.delete('token', 'local');
        this.loggedInSource.next(false);
        if (this.configuration.nosessionUrl) {
            /** @type {?} */
            var router = this.injector.get(Router);
            router.navigateByUrl(this.configuration.nosessionUrl);
        }
    };
    /**
     * @return {?}
     */
    OAuthService.prototype.refreshToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var token = this.getToken();
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
            _this.storageService.set('token', token, 'local');
            _this.loggedInSource.next(true);
        })));
    };
    OAuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    OAuthService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: StorageService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] },
        { type: Injector }
    ]; };
    /** @nocollapse */ OAuthService.ngInjectableDef = defineInjectable({ factory: function OAuthService_Factory() { return new OAuthService(inject(HttpClient), inject(StorageService), inject("FactorAuthConfiguration"), inject(INJECTOR)); }, token: OAuthService, providedIn: "root" });
    return OAuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function () {
    function AuthService(http, storageService, jwtService, oauthService, configuration) {
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
    AuthService.prototype.getProvider = /**
     * @return {?}
     */
    function () {
        return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
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
        { type: JwtService },
        { type: OAuthService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = defineInjectable({ factory: function AuthService_Factory() { return new AuthService(inject(HttpClient), inject(StorageService), inject(JwtService), inject(OAuthService), inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector, configuration) {
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
    AuthInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        this.authService = this.injector.get(AuthService);
        return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error instanceof HttpErrorResponse) {
                switch (((/** @type {?} */ (error))).status) {
                    case 401:
                        if (_this.authService.getProvider().handle401Error !== 'undefined') {
                            return _this.authService.getProvider().handle401Error(request, next);
                        }
                        else {
                            _this.authService.getProvider().logout();
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
    };
    AuthInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AuthInterceptor.ctorParameters = function () { return [
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    return AuthInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    /**
     * @param {?} configuration
     * @return {?}
     */
    AuthModule.forRoot = /**
     * @param {?} configuration
     * @return {?}
     */
    function (configuration) {
        return {
            ngModule: AuthModule,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: 'FactorAuthConfiguration', useValue: configuration }
            ]
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                },] }
    ];
    return AuthModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, configuration) {
        this.authService = authService;
        this.configuration = configuration;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        if (this.authService.getProvider().getToken()) {
            return true;
        }
        else {
            this.authService.getProvider().logout();
            return false;
        }
    };
    AuthGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(inject(AuthService), inject("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router, configuration) {
        this.authService = authService;
        this.router = router;
        this.configuration = configuration;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    LoginGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        if (this.authService.getProvider().getToken()) {
            this.router.navigateByUrl('/');
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    LoginGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    /** @nocollapse */ LoginGuard.ngInjectableDef = defineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(inject(AuthService), inject(Router), inject("FactorAuthConfiguration")); }, token: LoginGuard, providedIn: "root" });
    return LoginGuard;
}());

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