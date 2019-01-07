(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('factor-utils'), require('@angular/router'), require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('factor-auth', ['exports', 'factor-utils', '@angular/router', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['factor-auth'] = {}),global.i2,global.ng.router,global.rxjs,global.rxjs.operators,global.ng.core,global.ng.common.http));
}(this, (function (exports,i2,i2$1,rxjs,operators,i0,i1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthService = /** @class */ (function () {
        function AuthService(http, injector, storageService, configuration) {
            this.http = http;
            this.injector = injector;
            this.storageService = storageService;
            this.configuration = configuration;
            this.loggedInSource = new rxjs.BehaviorSubject(false);
            this.loggedIn$ = this.loggedInSource.asObservable();
        }
        /**
         * @param {?} form
         * @param {?=} redirect
         * @return {?}
         */
        AuthService.prototype.login = /**
         * @param {?} form
         * @param {?=} redirect
         * @return {?}
         */
            function (form, redirect) {
                var _this = this;
                this.router = this.router || this.injector.get(i2$1.Router);
                /** @type {?} */
                var params = {
                    client_id: this.configuration.clientId,
                    client_secret: this.configuration.clientSecret,
                    grant_type: 'password',
                    response_type: 'token',
                    username: form.username,
                    password: form.password
                };
                return this.http.post(this.configuration.tokenUrl, params).pipe(operators.tap(function (token) {
                    _this.storageService.set('token', token, localStorage);
                    _this.loggedInSource.next(true);
                    if (redirect) {
                        _this.router.navigate([redirect]);
                    }
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
                this.router = this.router || this.injector.get(i2$1.Router);
                this.storageService.delete('token', localStorage);
                this.loggedInSource.next(false);
                this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getToken = /**
         * @return {?}
         */
            function () {
                return this.storageService.get('token', localStorage);
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
                var token = this.storageService.get('token', localStorage);
                /** @type {?} */
                var url = "" + this.configuration.tokenUrl;
                /** @type {?} */
                var params = {
                    client_id: this.configuration.clientId,
                    client_secret: this.configuration.clientSecret,
                    grant_type: 'refresh_token',
                    refresh_token: token.refresh_token
                };
                return this.http.get(url, { params: params }).pipe(operators.tap(function (token) {
                    _this.storageService.set('token', token, localStorage);
                }));
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
                { type: i0.Injector },
                { type: i2.StorageService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorAuthConfiguration',] }] }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i0.INJECTOR), i0.inject(i2.StorageService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authService) {
            this.authService = authService;
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
                if (this.authService.getToken()) {
                    //TODO Verify session on server with Observable
                    return true;
                }
                else {
                    this.authService.logout(state.url);
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
                { type: AuthService }
            ];
        };
        /** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(AuthService)); }, token: AuthGuard, providedIn: "root" });
        return AuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LoginGuard = /** @class */ (function () {
        function LoginGuard(authService, router) {
            this.authService = authService;
            this.router = router;
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
                if (this.authService.getToken()) {
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
                { type: i2$1.Router }
            ];
        };
        /** @nocollapse */ LoginGuard.ngInjectableDef = i0.defineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(i0.inject(AuthService), i0.inject(i2$1.Router)); }, token: LoginGuard, providedIn: "root" });
        return LoginGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthInterceptor = /** @class */ (function () {
        function AuthInterceptor(injector) {
            this.injector = injector;
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
                return next.handle(this.addAuthenticationToken(request)).pipe(operators.catchError(function (error) {
                    if (error instanceof i1.HttpErrorResponse) {
                        switch ((( /** @type {?} */(error))).status) {
                            case 401:
                                return _this.handle401Error(request, next);
                                break;
                            default:
                                return rxjs.throwError(error);
                                break;
                        }
                    }
                    else {
                        return rxjs.throwError(error);
                    }
                }));
            };
        /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
        AuthInterceptor.prototype.handle401Error = /**
         * @param {?} request
         * @param {?} next
         * @return {?}
         */
            function (request, next) {
                var _this = this;
                if (!this.refreshTokenInProgress) {
                    this.refreshTokenInProgress = true;
                    this.refreshTokenSubject.next(null);
                    return this.authService.refreshToken().pipe(operators.switchMap(function (newToken) {
                        if (newToken) {
                            _this.refreshTokenSubject.next(newToken);
                            return next.handle(_this.addAuthenticationToken(request));
                        }
                        // If we don't get a new token, we are in trouble so logout.
                        _this.authService.logout();
                        return rxjs.throwError('');
                    }), operators.catchError(function (error) {
                        // If there is an exception calling 'refreshToken', bad news so logout.
                        _this.authService.logout();
                        return rxjs.throwError(error);
                    }), operators.share(), operators.finalize(function () {
                        _this.refreshTokenInProgress = false;
                    }));
                }
                else {
                    return this.refreshTokenSubject.pipe(operators.filter(function (token) { return token != null; }), operators.take(1), operators.switchMap(function (token) {
                        return next.handle(_this.addAuthenticationToken(request));
                    }));
                }
            };
        /**
         * @param {?} request
         * @return {?}
         */
        AuthInterceptor.prototype.addAuthenticationToken = /**
         * @param {?} request
         * @return {?}
         */
            function (request) {
                /** @type {?} */
                var token = this.authService.getToken();
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
        AuthInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        AuthInterceptor.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return AuthInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AuthService = AuthService;
    exports.AuthGuard = AuthGuard;
    exports.LoginGuard = LoginGuard;
    exports.AuthInterceptor = AuthInterceptor;
    exports.AuthModule = AuthModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-auth.umd.js.map