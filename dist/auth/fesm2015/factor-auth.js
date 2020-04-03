import { __decorate, __param } from 'tslib';
import { Inject, Injector, ɵɵdefineInjectable, ɵɵinject, INJECTOR, Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { tap, switchMap, catchError, share, finalize, filter, take } from 'rxjs/operators';
import { StorageService } from 'factor-utils';
import { Router } from '@angular/router';

let JwtService = class JwtService {
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
    addAuthenticationToken(request) {
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
    checkLoggedIn() {
        if (this.getToken()) {
            this.loggedInSource.next(true);
        }
        else {
            this.loggedInSource.next(false);
        }
        return this.loggedIn;
    }
    getToken() {
        return this.storageService.get(this.tokenKey, 'local');
    }
    login(data) {
        return this.http.post(this.configuration.tokenUrl, data).pipe(tap((token) => {
            this.storageService.set(this.tokenKey, token.token, 'local');
            this.loggedInSource.next(true);
        }));
    }
    logout() {
        this.storageService.delete(this.tokenKey, 'local');
        this.loggedInSource.next(false);
        if (this.configuration.nosessionUrl) {
            const router = this.injector.get(Router);
            router.navigateByUrl(this.configuration.nosessionUrl);
        }
    }
};
JwtService.ctorParameters = () => [
    { type: HttpClient },
    { type: StorageService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] },
    { type: Injector }
];
JwtService.ɵprov = ɵɵdefineInjectable({ factory: function JwtService_Factory() { return new JwtService(ɵɵinject(HttpClient), ɵɵinject(StorageService), ɵɵinject("FactorAuthConfiguration"), ɵɵinject(INJECTOR)); }, token: JwtService, providedIn: "root" });
JwtService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(2, Inject('FactorAuthConfiguration'))
], JwtService);

let OAuthService = class OAuthService {
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
    addAuthenticationToken(request) {
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
    checkLoggedIn() {
        if (this.getToken()) {
            this.loggedInSource.next(true);
        }
        else {
            this.loggedInSource.next(false);
        }
        return this.loggedIn;
    }
    getToken() {
        return this.storageService.get('token', 'local');
    }
    handle401Error(request, next) {
        if (!this.refreshTokenInProgress) {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return this.refreshToken().pipe(switchMap((newToken) => {
                if (newToken) {
                    this.refreshTokenSubject.next(newToken);
                    return next.handle(this.addAuthenticationToken(request));
                }
                // If we don't get a new token, we are in trouble so logout.
                this.logout();
                return throwError('');
            }), catchError(error => {
                // If there is an exception calling 'refreshToken', bad news so logout.
                this.logout();
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
    login(form) {
        const params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'password',
            response_type: 'token',
            username: form.username,
            password: form.password,
            state: Date.now()
        };
        return this.http.post(this.configuration.tokenUrl, params).pipe(tap((token) => {
            this.storageService.set('token', token, 'local');
            this.loggedInSource.next(true);
        }));
    }
    logout() {
        this.storageService.delete('token', 'local');
        this.loggedInSource.next(false);
        if (this.configuration.nosessionUrl) {
            const router = this.injector.get(Router);
            router.navigateByUrl(this.configuration.nosessionUrl);
        }
    }
    refreshToken() {
        const token = this.getToken();
        const url = `${this.configuration.tokenUrl}`;
        const params = {
            client_id: this.configuration.clientId,
            client_secret: this.configuration.clientSecret,
            grant_type: 'refresh_token',
            refresh_token: token.refresh_token
        };
        return this.http.get(url, { params: params }).pipe(tap((token) => {
            this.storageService.set('token', token, 'local');
            this.loggedInSource.next(true);
        }));
    }
};
OAuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: StorageService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] },
    { type: Injector }
];
OAuthService.ɵprov = ɵɵdefineInjectable({ factory: function OAuthService_Factory() { return new OAuthService(ɵɵinject(HttpClient), ɵɵinject(StorageService), ɵɵinject("FactorAuthConfiguration"), ɵɵinject(INJECTOR)); }, token: OAuthService, providedIn: "root" });
OAuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(2, Inject('FactorAuthConfiguration'))
], OAuthService);

let AuthService = class AuthService {
    constructor(http, storageService, jwtService, oauthService, configuration) {
        this.http = http;
        this.storageService = storageService;
        this.jwtService = jwtService;
        this.oauthService = oauthService;
        this.configuration = configuration;
        this.getProvider().checkLoggedIn();
    }
    getProvider() {
        return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: StorageService },
    { type: JwtService },
    { type: OAuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
AuthService.ɵprov = ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(ɵɵinject(HttpClient), ɵɵinject(StorageService), ɵɵinject(JwtService), ɵɵinject(OAuthService), ɵɵinject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(4, Inject('FactorAuthConfiguration'))
], AuthService);

let AuthInterceptor = class AuthInterceptor {
    constructor(injector, configuration) {
        this.injector = injector;
        this.configuration = configuration;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    intercept(request, next) {
        this.authService = this.injector.get(AuthService);
        return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
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
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
AuthInterceptor = __decorate([
    Injectable(),
    __param(1, Inject('FactorAuthConfiguration'))
], AuthInterceptor);

var AuthModule_1;
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot(configuration) {
        return {
            ngModule: AuthModule_1,
            providers: [
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                { provide: 'FactorAuthConfiguration', useValue: configuration }
            ]
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    NgModule({
        declarations: [],
        imports: [],
        exports: []
    })
], AuthModule);

let AuthGuard = class AuthGuard {
    constructor(authService, configuration) {
        this.authService = authService;
        this.configuration = configuration;
    }
    canActivate(next, state) {
        if (this.authService.getProvider().getToken()) {
            return true;
        }
        else {
            this.authService.getProvider().logout();
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
AuthGuard.ɵprov = ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(ɵɵinject(AuthService), ɵɵinject("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Inject('FactorAuthConfiguration'))
], AuthGuard);

let LoginGuard = class LoginGuard {
    constructor(authService, router, configuration) {
        this.authService = authService;
        this.router = router;
        this.configuration = configuration;
    }
    canActivate(next, state) {
        if (this.authService.getProvider().getToken()) {
            this.router.navigateByUrl('/');
            return false;
        }
        else {
            return true;
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: AuthService },
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
LoginGuard.ɵprov = ɵɵdefineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(ɵɵinject(AuthService), ɵɵinject(Router), ɵɵinject("FactorAuthConfiguration")); }, token: LoginGuard, providedIn: "root" });
LoginGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(2, Inject('FactorAuthConfiguration'))
], LoginGuard);

/*
 * Public API Surface of auth
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AuthGuard, AuthModule, AuthService, LoginGuard, AuthInterceptor as ɵa, JwtService as ɵb, OAuthService as ɵc };
//# sourceMappingURL=factor-auth.js.map
