(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('factor-common', ['exports', '@angular/core', '@angular/common/http', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['factor-common'] = {}),global.ng.core,global.ng.common.http,global.ng.router,global.rxjs,global.rxjs.operators));
}(this, (function (exports,i0,i1,router,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StorageService = /** @class */ (function () {
        function StorageService() {
        }
        /**
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
        StorageService.prototype.delete = /**
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
            function (key, storage) {
                if (storage) {
                    delete storage[key];
                }
                else {
                    delete sessionStorage[key];
                }
            };
        /**
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
        StorageService.prototype.get = /**
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
            function (key, storage) {
                /** @type {?} */
                var parsedValue;
                /** @type {?} */
                var value = storage ? storage[key] : sessionStorage[key];
                if (value) {
                    try {
                        parsedValue = JSON.parse(value);
                    }
                    catch (err) {
                        parsedValue = value;
                    }
                }
                return parsedValue;
            };
        /**
         * @param {?} key
         * @param {?} value
         * @param {?=} storage
         * @return {?}
         */
        StorageService.prototype.set = /**
         * @param {?} key
         * @param {?} value
         * @param {?=} storage
         * @return {?}
         */
            function (key, value, storage) {
                if (storage) {
                    storage[key] = JSON.stringify(value);
                }
                else {
                    sessionStorage[key] = JSON.stringify(value);
                }
            };
        StorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        StorageService.ctorParameters = function () { return []; };
        /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
        return StorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthService = /** @class */ (function () {
        function AuthService(http, injector, storageService, environment) {
            this.http = http;
            this.injector = injector;
            this.storageService = storageService;
            this.environment = environment;
            this.loggedInSource = new rxjs.BehaviorSubject(false);
            this.loggedIn$ = this.loggedInSource.asObservable();
            this.configurationSource = new rxjs.BehaviorSubject(false);
            this.configuration$ = this.configurationSource.asObservable();
        }
        /**
         * @param {?} formValue
         * @return {?}
         */
        AuthService.prototype.login = /**
         * @param {?} formValue
         * @return {?}
         */
            function (formValue) {
                var _this = this;
                /** @type {?} */
                var body = Object.assign(formValue, {
                    grant_type: 'password',
                    response_type: 'token',
                    client_id: this.environment.oauth.clientId,
                    client_secret: this.environment.oauth.clientSecret
                });
                return this.http.post(this.environment.oauth.tokenUrl, body).pipe(operators.tap(function (token) {
                    _this.storageService.set('token', token);
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
                this.router = this.injector.get(router.Router);
                this.storageService.delete('token');
                this.loggedInSource.next(false);
                this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getConfiguration = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return this.http.get(this.environment.configurationUrl).pipe(operators.tap(function (response) {
                    _this.loggedInSource.next(true);
                    _this.configurationSource.next(response);
                    //Save last user loggedIn
                    _this.storageService.set('lastUser', {
                        username: response.user.username,
                        picture: response.picture
                    }, localStorage);
                }));
            };
        /**
         * @return {?}
         */
        AuthService.prototype.getToken = /**
         * @return {?}
         */
            function () {
                return this.storageService.get('token');
            };
        /**
         * @return {?}
         */
        AuthService.prototype.checkAuth = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.getToken()) {
                    /** @type {?} */
                    var config = this.getConfiguration().subscribe(function () {
                        _this.loggedInSource.next(true);
                    }, function (error) {
                        if (error.status == 0) {
                            _this.router = _this.injector.get(router.Router);
                            _this.router.navigateByUrl('/error/0', { skipLocationChange: true });
                        }
                    });
                    return config;
                }
                else {
                    return false;
                }
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
                { type: StorageService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['environment',] }] }
            ];
        };
        /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i0.INJECTOR), i0.inject(StorageService), i0.inject("environment")); }, token: AuthService, providedIn: "root" });
        return AuthService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AuthInterceptor = /** @class */ (function () {
        function AuthInterceptor(injector) {
            this.injector = injector;
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
                /** @type {?} */
                var token = this.authService.getToken();
                if (token) {
                    request = request.clone({
                        headers: request.headers.set('Authorization', token.token_type + " " + token.access_token)
                    });
                }
                return next.handle(request).pipe(operators.tap(function (event) { }, function (err) {
                    if (err instanceof i1.HttpErrorResponse) {
                        if (err.status == 401) {
                            _this.authService.logout();
                        }
                    }
                }));
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
    var CommonModule = /** @class */ (function () {
        function CommonModule() {
        }
        /**
         * @param {?} environment
         * @return {?}
         */
        CommonModule.forRoot = /**
         * @param {?} environment
         * @return {?}
         */
            function (environment) {
                return {
                    ngModule: CommonModule,
                    providers: [
                        { provide: i1.HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                        { provide: 'environment', useValue: environment }
                    ]
                };
            };
        CommonModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [],
                        exports: []
                    },] }
        ];
        return CommonModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleAnalyticsService = /** @class */ (function () {
        function GoogleAnalyticsService(router$$1, environment) {
            var _this = this;
            this.router = router$$1;
            this.environment = environment;
            router$$1.events.subscribe(function (event) {
                try {
                    if (typeof gtag === 'function') {
                        if (event instanceof router.NavigationEnd) {
                            setTimeout(function () {
                                gtag('config', _this.environment.googleAnalytics.trackingId, {
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
        GoogleAnalyticsService.prototype.appendTrackingCode = /**
         * @return {?}
         */
            function () {
                try {
                    if (this.environment.googleAnalytics && this.environment.googleAnalytics.trackingId) {
                        /** @type {?} */
                        var s1 = document.createElement('script');
                        s1.async = true;
                        s1.src = "https://www.googletagmanager.com/gtag/js?id=" + this.environment.googleAnalytics.trackingId;
                        document.head.appendChild(s1);
                        /** @type {?} */
                        var s2 = document.createElement('script');
                        s2.innerHTML = "\n         window.dataLayer = window.dataLayer || [];\n         function gtag(){dataLayer.push(arguments);}\n         gtag('js', new Date());\n         gtag('config', '" + this.environment.googleAnalytics.trackingId + "');\n       ";
                        document.head.appendChild(s2);
                    }
                }
                catch (ex) {
                    console.error('Error appending google analytics');
                    console.error(ex);
                }
            };
        /**
         * @param {?} action
         * @param {?=} category
         * @param {?=} label
         * @param {?=} value
         * @return {?}
         */
        GoogleAnalyticsService.prototype.setEvent = /**
         * @param {?} action
         * @param {?=} category
         * @param {?=} label
         * @param {?=} value
         * @return {?}
         */
            function (action, category, label, value) {
                if (category === void 0) {
                    category = null;
                }
                if (label === void 0) {
                    label = null;
                }
                if (value === void 0) {
                    value = null;
                }
                if (typeof gtag === 'function') {
                    gtag('event', action, {
                        event_category: category,
                        event_label: label,
                        value: value
                    });
                }
            };
        /**
         * @param {?} userId
         * @return {?}
         */
        GoogleAnalyticsService.prototype.setUserId = /**
         * @param {?} userId
         * @return {?}
         */
            function (userId) {
                if (typeof gtag === 'function') {
                    gtag('set', { 'user_id': userId });
                }
            };
        GoogleAnalyticsService.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        GoogleAnalyticsService.ctorParameters = function () {
            return [
                { type: router.Router },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['environment',] }] }
            ];
        };
        return GoogleAnalyticsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.AuthInterceptor = AuthInterceptor;
    exports.AuthService = AuthService;
    exports.CommonModule = CommonModule;
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.StorageService = StorageService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yLWNvbW1vbi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2ZhY3Rvci1jb21tb24vbGliL3N0b3JhZ2Uuc2VydmljZS50cyIsIm5nOi8vZmFjdG9yLWNvbW1vbi9saWIvYXV0aC5zZXJ2aWNlLnRzIiwibmc6Ly9mYWN0b3ItY29tbW9uL2xpYi9hdXRoLWludGVyY2VwdG9yLnRzIiwibmc6Ly9mYWN0b3ItY29tbW9uL2xpYi9jb21tb24ubW9kdWxlLnRzIiwibmc6Ly9mYWN0b3ItY29tbW9uL2xpYi9nb29nbGUtYW5hbHl0aWNzLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBkZWxldGUoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/KSB7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgIGRlbGV0ZSBzdG9yYWdlW2tleV07XG4gICAgfWVsc2V7XG4gICAgICBkZWxldGUgc2Vzc2lvblN0b3JhZ2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgZ2V0KGtleTogc3RyaW5nLCBzdG9yYWdlPykge1xuICAgIGxldCBwYXJzZWRWYWx1ZTtcbiAgICBsZXQgdmFsdWUgPSBzdG9yYWdlID8gc3RvcmFnZVtrZXldIDogc2Vzc2lvblN0b3JhZ2Vba2V5XTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFZhbHVlID0gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICB9XG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgc3RvcmFnZT8pIHtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgc3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZVtrZXldID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vc3RvcmFnZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBwcml2YXRlIGxvZ2dlZEluU291cmNlOiBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcbiAgbG9nZ2VkSW4kOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5sb2dnZWRJblNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgcHJpdmF0ZSBjb25maWd1cmF0aW9uU291cmNlOiBCZWhhdmlvclN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55PihmYWxzZSk7XG4gIGNvbmZpZ3VyYXRpb24kOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmNvbmZpZ3VyYXRpb25Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gIHJvdXRlcjogUm91dGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBASW5qZWN0KCdlbnZpcm9ubWVudCcpIHByaXZhdGUgZW52aXJvbm1lbnRcbiAgKSB7IH1cblxuICBsb2dpbihmb3JtVmFsdWU6IHsgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9KSB7XG4gICAgbGV0IGJvZHk6IG9iamVjdCA9IE9iamVjdC5hc3NpZ24oZm9ybVZhbHVlLCB7XG4gICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgcmVzcG9uc2VfdHlwZTogJ3Rva2VuJyxcbiAgICAgIGNsaWVudF9pZDogdGhpcy5lbnZpcm9ubWVudC5vYXV0aC5jbGllbnRJZCxcbiAgICAgIGNsaWVudF9zZWNyZXQ6IHRoaXMuZW52aXJvbm1lbnQub2F1dGguY2xpZW50U2VjcmV0XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuZW52aXJvbm1lbnQub2F1dGgudG9rZW5VcmwsIGJvZHkpLnBpcGUodGFwKCh0b2tlbjogYW55KSA9PiB7XG4gICAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLnNldCgndG9rZW4nLCB0b2tlbik7XG4gICAgfSkpO1xuICB9XG4gIGxvZ291dChyZWRpcmVjdD86IHN0cmluZykge1xuICAgIHRoaXMucm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcbiAgICB0aGlzLnN0b3JhZ2VTZXJ2aWNlLmRlbGV0ZSgndG9rZW4nKTtcbiAgICB0aGlzLmxvZ2dlZEluU291cmNlLm5leHQoZmFsc2UpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJywgcmVkaXJlY3Q/IHtyZWRpcmVjdDpyZWRpcmVjdH0gOiB7fV0pO1xuICB9XG4gIGdldENvbmZpZ3VyYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5lbnZpcm9ubWVudC5jb25maWd1cmF0aW9uVXJsKS5waXBlKHRhcCgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgdGhpcy5sb2dnZWRJblNvdXJjZS5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5jb25maWd1cmF0aW9uU291cmNlLm5leHQocmVzcG9uc2UpO1xuICAgICAgLy9TYXZlIGxhc3QgdXNlciBsb2dnZWRJblxuICAgICAgdGhpcy5zdG9yYWdlU2VydmljZS5zZXQoJ2xhc3RVc2VyJywge1xuICAgICAgICB1c2VybmFtZTogcmVzcG9uc2UudXNlci51c2VybmFtZSxcbiAgICAgICAgcGljdHVyZTogcmVzcG9uc2UucGljdHVyZVxuICAgICAgfSwgbG9jYWxTdG9yYWdlKTtcbiAgICB9KSk7XG4gIH1cbiAgZ2V0VG9rZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0KCd0b2tlbicpO1xuICB9XG4gIGNoZWNrQXV0aCgpIHtcbiAgICBpZiAodGhpcy5nZXRUb2tlbigpKSB7XG4gICAgICBsZXQgY29uZmlnID0gdGhpcy5nZXRDb25maWd1cmF0aW9uKCkuc3Vic2NyaWJlKCgpPT57XG4gICAgICAgIHRoaXMubG9nZ2VkSW5Tb3VyY2UubmV4dCh0cnVlKTtcbiAgICAgIH0sIChlcnJvcik9PntcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9lcnJvci8wJywgeyBza2lwTG9jYXRpb25DaGFuZ2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9ZWxzZXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwRXZlbnQsIEh0dHBJbnRlcmNlcHRvciwgSHR0cEhhbmRsZXIsIEh0dHBSZXF1ZXN0LCBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhJbnRlcmNlcHRvciB7XG4gIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkgeyB9XG5cbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgbGV0IHRva2VuID0gdGhpcy5hdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBoZWFkZXJzOiByZXF1ZXN0LmhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgYCR7dG9rZW4udG9rZW5fdHlwZX0gJHt0b2tlbi5hY2Nlc3NfdG9rZW59YClcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIHRhcChldmVudCA9PiB7IH0sIGVyciA9PiB7XG4gICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgIGlmIChlcnIuc3RhdHVzID09IDQwMSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtaW50ZXJjZXB0b3InO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgQ29tbW9uTW9kdWxlIHtcbiAgcHVibGljIHN0YXRpYyBmb3JSb290KGVudmlyb25tZW50OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgICB7IHByb3ZpZGU6ICdlbnZpcm9ubWVudCcsIHVzZVZhbHVlOiBlbnZpcm9ubWVudCB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBndGFnOiBGdW5jdGlvbjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZUFuYWx5dGljc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdCgnZW52aXJvbm1lbnQnKSBwcml2YXRlIGVudmlyb25tZW50XG4gICkge1xuICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZ3RhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgdGhpcy5lbnZpcm9ubWVudC5nb29nbGVBbmFseXRpY3MudHJhY2tpbmdJZCwge1xuICAgICAgICAgICAgICAgICdwYWdlX3RpdGxlJzogZG9jdW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgJ3BhZ2VfcGF0aCc6IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcHVibGljIGFwcGVuZFRyYWNraW5nQ29kZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzICYmIHRoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzLnRyYWNraW5nSWQpIHtcbiAgICAgICAgY29uc3QgczEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgczEuYXN5bmMgPSB0cnVlO1xuICAgICAgICBzMS5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke3RoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzLnRyYWNraW5nSWR9YDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzMSk7XG4gICAgICAgIGNvbnN0IHMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHMyLmlubmVySFRNTCA9IGBcbiAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3RoaXMuZW52aXJvbm1lbnQuZ29vZ2xlQW5hbHl0aWNzLnRyYWNraW5nSWR9Jyk7XG4gICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzMik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFwcGVuZGluZyBnb29nbGUgYW5hbHl0aWNzJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGV4KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldEV2ZW50KGFjdGlvbjogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nID0gbnVsbCwgbGFiZWw6IHN0cmluZyA9IG51bGwsIHZhbHVlOiBudW1iZXIgPSBudWxsKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiBndGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBndGFnKCdldmVudCcsIGFjdGlvbiwge1xuICAgICAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgZ3RhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZ3RhZygnc2V0JywgeyAndXNlcl9pZCc6IHVzZXJJZCB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQmVoYXZpb3JTdWJqZWN0IiwidGFwIiwiUm91dGVyIiwiSHR0cENsaWVudCIsIkluamVjdG9yIiwiSW5qZWN0IiwiSHR0cEVycm9yUmVzcG9uc2UiLCJIVFRQX0lOVEVSQ0VQVE9SUyIsIk5nTW9kdWxlIiwicm91dGVyIiwiTmF2aWdhdGlvbkVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7Ozs7OztRQUVqQiwrQkFBTTs7Ozs7WUFBTixVQUFPLEdBQVcsRUFBRSxPQUFRO2dCQUMxQixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDckI7cUJBQUk7b0JBQ0gsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzVCO2FBQ0Y7Ozs7OztRQUNELDRCQUFHOzs7OztZQUFILFVBQUksR0FBVyxFQUFFLE9BQVE7O29CQUNuQixXQUFXOztvQkFDWCxLQUFLLEdBQUcsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO2dCQUN4RCxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJO3dCQUNGLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNqQztvQkFBQyxPQUFPLEdBQUcsRUFBRTt3QkFDWixXQUFXLEdBQUcsS0FBSyxDQUFDO3FCQUNyQjtpQkFDRjtnQkFDRCxPQUFPLFdBQVcsQ0FBQzthQUNwQjs7Ozs7OztRQUNELDRCQUFHOzs7Ozs7WUFBSCxVQUFJLEdBQVcsRUFBRSxLQUFVLEVBQUUsT0FBUTtnQkFDbkMsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RDO3FCQUFNO29CQUNM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