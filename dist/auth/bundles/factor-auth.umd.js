(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('factor-utils'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('factor-auth', ['exports', '@angular/core', '@angular/common/http', 'rxjs', 'rxjs/operators', 'factor-utils', '@angular/router'], factory) :
    (global = global || self, factory(global['factor-auth'] = {}, global.ng.core, global.ng.common.http, global.rxjs, global.rxjs.operators, global['factor-utils'], global.ng.router));
}(this, (function (exports, core, http, rxjs, operators, factorUtils, router) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
        JwtService.prototype.addAuthenticationToken = function (request) {
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
        JwtService.prototype.checkLoggedIn = function () {
            if (this.getToken()) {
                this.loggedInSource.next(true);
            }
            else {
                this.loggedInSource.next(false);
            }
            return this.loggedIn;
        };
        JwtService.prototype.getToken = function () {
            return this.storageService.get(this.tokenKey, 'local');
        };
        JwtService.prototype.login = function (data) {
            var _this = this;
            return this.http.post(this.configuration.tokenUrl, data).pipe(operators.tap(function (token) {
                _this.storageService.set(_this.tokenKey, token.token, 'local');
                _this.loggedInSource.next(true);
            }));
        };
        JwtService.prototype.logout = function () {
            this.storageService.delete(this.tokenKey, 'local');
            this.loggedInSource.next(false);
            if (this.configuration.nosessionUrl) {
                var router$1 = this.injector.get(router.Router);
                router$1.navigateByUrl(this.configuration.nosessionUrl);
            }
        };
        JwtService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: factorUtils.StorageService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorAuthConfiguration',] }] },
            { type: core.Injector }
        ]; };
        JwtService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function JwtService_Factory() { return new JwtService(core["ɵɵinject"](http.HttpClient), core["ɵɵinject"](factorUtils.StorageService), core["ɵɵinject"]("FactorAuthConfiguration"), core["ɵɵinject"](core.INJECTOR)); }, token: JwtService, providedIn: "root" });
        JwtService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(2, core.Inject('FactorAuthConfiguration'))
        ], JwtService);
        return JwtService;
    }());

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
        OAuthService.prototype.addAuthenticationToken = function (request) {
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
        OAuthService.prototype.checkLoggedIn = function () {
            if (this.getToken()) {
                this.loggedInSource.next(true);
            }
            else {
                this.loggedInSource.next(false);
            }
            return this.loggedIn;
        };
        OAuthService.prototype.getToken = function () {
            return this.storageService.get('token', 'local');
        };
        OAuthService.prototype.handle401Error = function (request, next) {
            var _this = this;
            if (!this.refreshTokenInProgress) {
                this.refreshTokenInProgress = true;
                this.refreshTokenSubject.next(null);
                return this.refreshToken().pipe(operators.switchMap(function (newToken) {
                    if (newToken) {
                        _this.refreshTokenSubject.next(newToken);
                        return next.handle(_this.addAuthenticationToken(request));
                    }
                    // If we don't get a new token, we are in trouble so logout.
                    _this.logout();
                    return rxjs.throwError('');
                }), operators.catchError(function (error) {
                    // If there is an exception calling 'refreshToken', bad news so logout.
                    _this.logout();
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
        OAuthService.prototype.login = function (form) {
            var _this = this;
            var params = {
                client_id: this.configuration.clientId,
                client_secret: this.configuration.clientSecret,
                grant_type: 'password',
                response_type: 'token',
                username: form.username,
                password: form.password,
                state: Date.now()
            };
            return this.http.post(this.configuration.tokenUrl, params).pipe(operators.tap(function (token) {
                _this.storageService.set('token', token, 'local');
                _this.loggedInSource.next(true);
            }));
        };
        OAuthService.prototype.logout = function () {
            this.storageService.delete('token', 'local');
            this.loggedInSource.next(false);
            if (this.configuration.nosessionUrl) {
                var router$1 = this.injector.get(router.Router);
                router$1.navigateByUrl(this.configuration.nosessionUrl);
            }
        };
        OAuthService.prototype.refreshToken = function () {
            var _this = this;
            var token = this.getToken();
            var url = "" + this.configuration.tokenUrl;
            var params = {
                client_id: this.configuration.clientId,
                client_secret: this.configuration.clientSecret,
                grant_type: 'refresh_token',
                refresh_token: token.refresh_token
            };
            return this.http.get(url, { params: params }).pipe(operators.tap(function (token) {
                _this.storageService.set('token', token, 'local');
                _this.loggedInSource.next(true);
            }));
        };
        OAuthService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: factorUtils.StorageService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorAuthConfiguration',] }] },
            { type: core.Injector }
        ]; };
        OAuthService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function OAuthService_Factory() { return new OAuthService(core["ɵɵinject"](http.HttpClient), core["ɵɵinject"](factorUtils.StorageService), core["ɵɵinject"]("FactorAuthConfiguration"), core["ɵɵinject"](core.INJECTOR)); }, token: OAuthService, providedIn: "root" });
        OAuthService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(2, core.Inject('FactorAuthConfiguration'))
        ], OAuthService);
        return OAuthService;
    }());

    var AuthService = /** @class */ (function () {
        function AuthService(http, storageService, jwtService, oauthService, configuration) {
            this.http = http;
            this.storageService = storageService;
            this.jwtService = jwtService;
            this.oauthService = oauthService;
            this.configuration = configuration;
            this.getProvider().checkLoggedIn();
        }
        AuthService.prototype.getProvider = function () {
            return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
        };
        AuthService.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: factorUtils.StorageService },
            { type: JwtService },
            { type: OAuthService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorAuthConfiguration',] }] }
        ]; };
        AuthService.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AuthService_Factory() { return new AuthService(core["ɵɵinject"](http.HttpClient), core["ɵɵinject"](factorUtils.StorageService), core["ɵɵinject"](JwtService), core["ɵɵinject"](OAuthService), core["ɵɵinject"]("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
        AuthService = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(4, core.Inject('FactorAuthConfiguration'))
        ], AuthService);
        return AuthService;
    }());

    var AuthInterceptor = /** @class */ (function () {
        function AuthInterceptor(injector, configuration) {
            this.injector = injector;
            this.configuration = configuration;
            this.refreshTokenInProgress = false;
            this.refreshTokenSubject = new rxjs.BehaviorSubject(null);
        }
        AuthInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            this.authService = this.injector.get(AuthService);
            return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(operators.catchError(function (error) {
                if (error instanceof http.HttpErrorResponse) {
                    switch (error.status) {
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
            }));
        };
        AuthInterceptor.ctorParameters = function () { return [
            { type: core.Injector },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorAuthConfiguration',] }] }
        ]; };
        AuthInterceptor = __decorate([
            core.Injectable(),
            __param(1, core.Inject('FactorAuthConfiguration'))
        ], AuthInterceptor);
        return AuthInterceptor;
    }());

    var AuthModule = /** @class */ (function () {
        function AuthModule() {
        }
        AuthModule_1 = AuthModule;
        AuthModule.forRoot = function (configuration) {
            return {
                ngModule: AuthModule_1,
                providers: [
                    { provide: http.HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                    { provide: 'FactorAuthConfiguration', useValue: configuration }
                ]
            };
        };
        var AuthModule_1;
        AuthModule = AuthModule_1 = __decorate([
            core.NgModule({
                declarations: [],
                imports: [],
                exports: []
            })
        ], AuthModule);
        return AuthModule;
    }());

    var AuthGuard = /** @class */ (function () {
        function AuthGuard(authService, configuration) {
            this.authService = authService;
            this.configuration = configuration;
        }
        AuthGuard.prototype.canActivate = function (next, state) {
            if (this.authService.getProvider().getToken()) {
                return true;
            }
            else {
                this.authService.getProvider().logout();
                return false;
            }
        };
        AuthGuard.ctorParameters = function () { return [
            { type: AuthService },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorAuthConfiguration',] }] }
        ]; };
        AuthGuard.ɵprov = core["ɵɵdefineInjectable"]({ factory: function AuthGuard_Factory() { return new AuthGuard(core["ɵɵinject"](AuthService), core["ɵɵinject"]("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });
        AuthGuard = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(1, core.Inject('FactorAuthConfiguration'))
        ], AuthGuard);
        return AuthGuard;
    }());

    var LoginGuard = /** @class */ (function () {
        function LoginGuard(authService, router, configuration) {
            this.authService = authService;
            this.router = router;
            this.configuration = configuration;
        }
        LoginGuard.prototype.canActivate = function (next, state) {
            if (this.authService.getProvider().getToken()) {
                this.router.navigateByUrl('/');
                return false;
            }
            else {
                return true;
            }
        };
        LoginGuard.ctorParameters = function () { return [
            { type: AuthService },
            { type: router.Router },
            { type: undefined, decorators: [{ type: core.Inject, args: ['FactorAuthConfiguration',] }] }
        ]; };
        LoginGuard.ɵprov = core["ɵɵdefineInjectable"]({ factory: function LoginGuard_Factory() { return new LoginGuard(core["ɵɵinject"](AuthService), core["ɵɵinject"](router.Router), core["ɵɵinject"]("FactorAuthConfiguration")); }, token: LoginGuard, providedIn: "root" });
        LoginGuard = __decorate([
            core.Injectable({
                providedIn: 'root'
            }),
            __param(2, core.Inject('FactorAuthConfiguration'))
        ], LoginGuard);
        return LoginGuard;
    }());

    exports.AuthGuard = AuthGuard;
    exports.AuthModule = AuthModule;
    exports.AuthService = AuthService;
    exports.LoginGuard = LoginGuard;
    exports.ɵa = AuthInterceptor;
    exports.ɵb = JwtService;
    exports.ɵc = OAuthService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=factor-auth.umd.js.map
