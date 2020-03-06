(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('factor-utils'), require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('factor-auth', ['exports', '@angular/common/http', 'rxjs', 'rxjs/operators', 'factor-utils', '@angular/core', '@angular/router'], factory) :
    (factory((global['factor-auth'] = {}),global.ng.common.http,global.rxjs,global.rxjs.operators,global.i2,global.ng.core,global.ng.router));
}(this, (function (exports,i1,rxjs,operators,i2,i0,i2$1) { 'use strict';

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
            this.loggedInSource = new rxjs.BehaviorSubject(false);
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
                return this.http.post(this.configuration.tokenUrl, data).pipe(operators.tap(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
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
                    var router = this.injector.get(i2$1.Router);
                    router.navigateByUrl(this.configuration.nosessionUrl);
                }
            };
        JwtService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        JwtService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.StorageService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ JwtService.ngInjectableDef = i0.defineInjectable({ factory: function JwtService_Factory() { return new JwtService(i0.inject(i1.HttpClient), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration"), i0.inject(i0.INJECTOR)); }, token: JwtService, providedIn: "root" });
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
            this.loggedInSource = new rxjs.BehaviorSubject(false);
            this.loggedIn = this.loggedInSource.asObservable();
            this.refreshTokenInProgress = false;
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
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
                    return this.refreshToken().pipe(operators.switchMap(( /**
                     * @param {?} newToken
                     * @return {?}
                     */function (newToken) {
                        if (newToken) {
                            _this.refreshTokenSubject.next(newToken);
                            return next.handle(_this.addAuthenticationToken(request));
                        }
                        // If we don't get a new token, we are in trouble so logout.
                        _this.logout();
                        return rxjs.throwError('');
                    })), operators.catchError(( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        // If there is an exception calling 'refreshToken', bad news so logout.
                        _this.logout();
                        return rxjs.throwError(error);
                    })), operators.share(), operators.finalize(( /**
                     * @return {?}
                     */function () {
                        _this.refreshTokenInProgress = false;
                    })));
                }
                else {
                    return this.refreshTokenSubject.pipe(operators.filter(( /**
                     * @param {?} token
                     * @return {?}
                     */function (token) { return token != null; })), operators.take(1), operators.switchMap(( /**
                     * @param {?} token
                     * @return {?}
                     */function (token) {
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
                return this.http.post(this.configuration.tokenUrl, params).pipe(operators.tap(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
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
                    var router = this.injector.get(i2$1.Router);
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
                return this.http.get(url, { params: params }).pipe(operators.tap(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) {
                    _this.storageService.set('token', token, 'local');
                    _this.loggedInSource.next(true);
                })));
            };
        OAuthService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        OAuthService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.StorageService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] },
                { type: i0.Injector }
            ];
        };
        /** @nocollapse */ OAuthService.ngInjectableDef = i0.defineInjectable({ factory: function OAuthService_Factory() { return new OAuthService(i0.inject(i1.HttpClient), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration"), i0.inject(i0.INJECTOR)); }, token: OAuthService, providedIn: "root" });
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i2.StorageService },
                { type: JwtService },
                { type: OAuthService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i2.StorageService), i0.inject(JwtService), i0.inject(OAuthService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
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
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
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
                return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(operators.catchError(( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    if (error instanceof i1.HttpErrorResponse) {
                        switch ((( /** @type {?} */(error))).status) {
                            case 401:
                                if (_this.authService.getProvider().handle401Error !== 'undefined') {
                                    return _this.authService.getProvider().handle401Error(request, next);
                                }
                                else {
                                    _this.authService.getProvider().logout();
                                    return rxjs.throwError(error);
                                }
                                break;
                            default:
                                return rxjs.throwError(error);
                                break;
                        }
                    }
                    else {
                        return rxjs.throwError(error);
                    }
                })));
            };
        AuthInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AuthInterceptor.ctorParameters = function () {
            return [
                { type: i0.Injector },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] }
            ];
        };
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
                        { provide: i1.HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                        { provide: 'FactorAuthConfiguration', useValue: configuration }
                    ]
                };
            };
        AuthModule.decorators = [
            { type: i0.NgModule, args: [{
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] }
            ];
        };
        /** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(AuthService), i0.inject("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        LoginGuard.ctorParameters = function () {
            return [
                { type: AuthService },
                { type: i2$1.Router },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] }
            ];
        };
        /** @nocollapse */ LoginGuard.ngInjectableDef = i0.defineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(i0.inject(AuthService), i0.inject(i2$1.Router), i0.inject("FactorAuthConfiguration")); }, token: LoginGuard, providedIn: "root" });
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

    exports.AuthModule = AuthModule;
    exports.AuthGuard = AuthGuard;
    exports.AuthService = AuthService;
    exports.LoginGuard = LoginGuard;
    exports.ɵa = AuthInterceptor;
    exports.ɵb = JwtService;
    exports.ɵc = OAuthService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-auth.umd.js.map