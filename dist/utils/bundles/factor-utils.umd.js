(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/common'), require('crypto-js'), require('@angular/common/http'), require('rxjs'), require('rxjs/operators'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('factor-utils', ['exports', '@angular/router', '@angular/common', 'crypto-js', '@angular/common/http', 'rxjs', 'rxjs/operators', '@angular/core'], factory) :
    (factory((global['factor-utils'] = {}),global.ng.router,global.ng.common,global.CryptoJS,global.ng.common.http,global.rxjs,global.rxjs.operators,global.ng.core));
}(this, (function (exports,i1,common,CryptoJS,http,rxjs,operators,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FilesService = /** @class */ (function () {
        //private valueChangesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
        //private valueChanges: Observable<any[]> = this.valueChangesSubject.asObservable();
        function FilesService() {
            var _this = this;
            this.fileInput = document.createElement('input');
            //this.fileInput.style.display = 'none';
            this.fileInput.type = 'file';
            this.fileInput.addEventListener('change', ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                /** @type {?} */
                var reader = new FileReader();
                _this.loadValue(event.target.files);
            }));
        }
        /**
         * @private
         * @param {?} files
         * @return {?}
         */
        FilesService.prototype.loadValue = /**
         * @private
         * @param {?} files
         * @return {?}
         */
            function (files) {
                var _this = this;
                if (files && files.length > 0) {
                    /** @type {?} */
                    var data_1 = [];
                    var _loop_1 = function (i) {
                        /** @type {?} */
                        var file = files.item(i);
                        /** @type {?} */
                        var reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = ( /**
                         * @return {?}
                         */function () {
                            data_1.push(Object.assign(file, {
                                data: reader.result
                            }));
                            if (data_1.length == files.length) {
                                //this.valueChangesSubject.next(data.length > 0 ? data : null);
                                _this.callback(data_1.length > 0 ? data_1 : null);
                                _this.fileInput.value = null;
                            }
                        });
                    };
                    for (var i = 0; i < files.length; i++) {
                        _loop_1(i);
                    }
                }
            };
        /**
         * @param {?} callback
         * @param {?} options
         * @return {?}
         */
        FilesService.prototype.open = /**
         * @param {?} callback
         * @param {?} options
         * @return {?}
         */
            function (callback, options) {
                this.fileInput.accept = options && options.accept ? options.accept : '';
                this.fileInput.multiple = options && options.multiple;
                this.fileInput.click();
                this.callback = callback;
            };
        FilesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FilesService.ctorParameters = function () { return []; };
        /** @nocollapse */ FilesService.ngInjectableDef = i0.defineInjectable({ factory: function FilesService_Factory() { return new FilesService(); }, token: FilesService, providedIn: "root" });
        return FilesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleAnalyticsService = /** @class */ (function () {
        function GoogleAnalyticsService(router) {
            this.router = router;
        }
        /**
         * @param {?} trackingId
         * @return {?}
         */
        GoogleAnalyticsService.prototype.appendTrackingCode = /**
         * @param {?} trackingId
         * @return {?}
         */
            function (trackingId) {
                try {
                    if (trackingId) {
                        this.trackingId = trackingId;
                        /** @type {?} */
                        var s1 = document.createElement('script');
                        s1.async = true;
                        s1.src = "https://www.googletagmanager.com/gtag/js?id=" + trackingId;
                        document.head.appendChild(s1);
                        /** @type {?} */
                        var s2 = document.createElement('script');
                        s2.innerHTML = "\n         window.dataLayer = window.dataLayer || [];\n         function gtag(){dataLayer.push(arguments);}\n         gtag('js', new Date());\n         gtag('config', '" + trackingId + "');\n       ";
                        document.head.appendChild(s2);
                        this.initSubscribers();
                    }
                }
                catch (ex) {
                    console.error('Error appending google analytics');
                    console.error(ex);
                }
            };
        /**
         * @private
         * @return {?}
         */
        GoogleAnalyticsService.prototype.initSubscribers = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.router.events.subscribe(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    try {
                        if (typeof gtag === 'function') {
                            if (event instanceof i1.NavigationEnd && _this.trackingId) {
                                setTimeout(( /**
                                 * @return {?}
                                 */function () {
                                    gtag('config', _this.trackingId, {
                                        'page_title': document.title,
                                        'page_path': event.urlAfterRedirects
                                    });
                                }), 100);
                            }
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                }));
            };
        /**
         * @param {?} action
         * @param {?=} category
         * @param {?=} label
         * @param {?=} value
         * @return {?}
         */
        GoogleAnalyticsService.prototype.trackEvent = /**
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
         * @param {?} description
         * @param {?} fatal
         * @return {?}
         */
        GoogleAnalyticsService.prototype.trackException = /**
         * @param {?} description
         * @param {?} fatal
         * @return {?}
         */
            function (description, fatal) {
                if (typeof gtag === 'function') {
                    gtag('event', 'exception', {
                        description: description,
                        fatal: fatal
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleAnalyticsService.ctorParameters = function () {
            return [
                { type: i1.Router }
            ];
        };
        /** @nocollapse */ GoogleAnalyticsService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(i0.inject(i1.Router)); }, token: GoogleAnalyticsService, providedIn: "root" });
        return GoogleAnalyticsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleAnalyticsErrorHandler = /** @class */ (function () {
        function GoogleAnalyticsErrorHandler(injector) {
            this.injector = injector;
        }
        /**
         * @param {?} error
         * @return {?}
         */
        GoogleAnalyticsErrorHandler.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
            function (error) {
                /** @type {?} */
                var googleAnalyticsService = this.injector.get(GoogleAnalyticsService);
                if (error instanceof http.HttpErrorResponse) {
                    if (navigator.onLine) {
                        /** @type {?} */
                        var message = error.error ? JSON.stringify(error.error) : error.message;
                        googleAnalyticsService.trackEvent(error.url, 'Http Error', error.status + " - " + message);
                    }
                }
                else {
                    /** @type {?} */
                    var location_1 = this.injector.get(common.LocationStrategy);
                    /** @type {?} */
                    var message = error.message ? error.message : error.toString();
                    /** @type {?} */
                    var stack = error.stack ? error.stack : error.toString();
                    /** @type {?} */
                    var url = location_1 instanceof common.PathLocationStrategy ? location_1.path() : '';
                    googleAnalyticsService.trackEvent(message, 'Javascript Error', stack);
                }
                throw error;
            };
        GoogleAnalyticsErrorHandler.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        GoogleAnalyticsErrorHandler.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return GoogleAnalyticsErrorHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleTagManagerErrorHandler = /** @class */ (function () {
        function GoogleTagManagerErrorHandler(injector) {
            this.injector = injector;
        }
        /**
         * @param {?} error
         * @return {?}
         */
        GoogleTagManagerErrorHandler.prototype.handleError = /**
         * @param {?} error
         * @return {?}
         */
            function (error) {
                if (error instanceof http.HttpErrorResponse) {
                    if (navigator.onLine) {
                        /** @type {?} */
                        var message = error.error ? JSON.stringify(error.error) : error.message;
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({
                            event: 'http_error',
                            'gtm.errorMessage': message,
                            'gtm.errorUrl': error.url,
                            'error_status': error.status
                        });
                    }
                } /* else {
                  // DEPRECATED: Google Tag Manager automatically collect javascript errors this not neccesary now
                  const location = this.injector.get(LocationStrategy);
                  const message = error.message ? error.message : error.toString();
                  const stack = error.stack ? error.stack : error.toString();
                  const url = location instanceof PathLocationStrategy ? location.path() : '';
                  window.dataLayer = window.dataLayer || [];
                  window.dataLayer.push({
                    event: 'javascript_error',
                    'gtm.errorMessage': message,
                    'gtm.errorUrl': url,
                    'error_stack': stack,
            
                  });
                }*/
                throw error;
            };
        GoogleTagManagerErrorHandler.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        GoogleTagManagerErrorHandler.ctorParameters = function () {
            return [
                { type: i0.Injector }
            ];
        };
        return GoogleTagManagerErrorHandler;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleTagManagerService = /** @class */ (function () {
        function GoogleTagManagerService(platformId) {
            this.platformId = platformId;
        }
        /**
         * @param {?} trackingId
         * @return {?}
         */
        GoogleTagManagerService.prototype.appendTrackingCode = /**
         * @param {?} trackingId
         * @return {?}
         */
            function (trackingId) {
                try {
                    if (common.isPlatformBrowser(this.platformId) && trackingId) {
                        this.trackingId = trackingId;
                        /** @type {?} */
                        var s1 = document.createElement('script');
                        s1.innerHTML = "\n          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','" + trackingId + "');\n        ";
                        document.head.appendChild(s1);
                        /** @type {?} */
                        var s2 = document.createElement('noscript');
                        /** @type {?} */
                        var s3 = document.createElement('iframe');
                        s3.width = '0';
                        s3.height = '0';
                        s3.style.display = 'none';
                        s3.style.visibility = 'hidden';
                        s3.src = "https://www.googletagmanager.com/ns.html?id=" + trackingId;
                        s2.appendChild(s3);
                        (( /** @type {?} */(document.body))).prepend(s2);
                    }
                }
                catch (ex) {
                    console.error('Error appending google tag manager');
                    console.error(ex);
                }
            };
        /**
         * @param {?} variable
         * @return {?}
         */
        GoogleTagManagerService.prototype.addVariable = /**
         * @param {?} variable
         * @return {?}
         */
            function (variable) {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push(variable);
            };
        GoogleTagManagerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleTagManagerService.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] }
            ];
        };
        /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(i0.inject(i0.PLATFORM_ID)); }, token: GoogleTagManagerService, providedIn: "root" });
        return GoogleTagManagerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Only works on client storage
    var StorageService = /** @class */ (function () {
        function StorageService(platformId, configuration) {
            this.platformId = platformId;
            this.configuration = configuration;
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
                if (common.isPlatformBrowser(this.platformId)) {
                    if (!storage || typeof storage == 'string') {
                        switch (storage) {
                            case 'local':
                            case 'localStorage':
                                delete localStorage[key];
                                break;
                            case 'memory':
                                delete this.memoryStorage[key];
                                break;
                            default:
                                delete sessionStorage[key];
                                break;
                        }
                    }
                    else if (typeof storage == 'object') {
                        delete storage[key];
                    }
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
                if (common.isPlatformBrowser(this.platformId)) {
                    try {
                        parsedValue = JSON.parse(this.getValue(key, storage));
                    }
                    catch (err) {
                        parsedValue = this.getValue(key, storage);
                    }
                }
                return parsedValue;
            };
        /**
         * @private
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
        StorageService.prototype.getValue = /**
         * @private
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
            function (key, storage) {
                /** @type {?} */
                var value;
                if (!storage || typeof storage == 'string') {
                    switch (storage) {
                        case 'local':
                        case 'localStorage':
                            value = localStorage[key];
                            break;
                        case 'memory':
                            value = this.memoryStorage[key];
                            break;
                        default:
                            value = sessionStorage[key];
                            break;
                    }
                }
                else if (typeof storage == 'object') {
                    value = storage[key];
                }
                return this.decrypt(value);
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        StorageService.prototype.decrypt = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value !== null &&
                    value !== undefined &&
                    value !== '' &&
                    this.configuration &&
                    this.configuration.storage &&
                    this.configuration.storage.encryptionSecret) {
                    /** @type {?} */
                    var decryptedValue = CryptoJS.AES.decrypt(value, this.configuration.storage.encryptionSecret);
                    value = decryptedValue.toString(CryptoJS.enc.Utf8);
                }
                return value;
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        StorageService.prototype.encrypt = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value !== null &&
                    value !== undefined &&
                    value !== '' &&
                    this.configuration &&
                    this.configuration.storage &&
                    this.configuration.storage.encryptionSecret) {
                    value = CryptoJS.AES.encrypt(value, this.configuration.storage.encryptionSecret);
                    return value.toString();
                }
                else {
                    return value;
                }
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
                if (common.isPlatformBrowser(this.platformId)) {
                    /** @type {?} */
                    var valueEncrypted = this.encrypt(JSON.stringify(value));
                    if (!storage || typeof storage == 'string') {
                        switch (storage) {
                            case 'local':
                            case 'localStorage':
                                localStorage[key] = valueEncrypted;
                                break;
                            case 'memory':
                                this.memoryStorage[key] = valueEncrypted;
                                break;
                            default:
                                sessionStorage[key] = valueEncrypted;
                                break;
                        }
                    }
                    else {
                        storage[key] = valueEncrypted;
                    }
                }
            };
        StorageService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        StorageService.ctorParameters = function () {
            return [
                { type: Object, decorators: [{ type: i0.Inject, args: [i0.PLATFORM_ID,] }] },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorUtilsConfiguration',] }] }
            ];
        };
        /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(i0.inject(i0.PLATFORM_ID), i0.inject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
        return StorageService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAX_CACHE_AGE = 60 * 60 * 1000;

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CacheService = /** @class */ (function () {
        function CacheService() {
            this.cacheMap = new Map();
        }
        /**
         * @param {?} req
         * @return {?}
         */
        CacheService.prototype.get = /**
         * @param {?} req
         * @return {?}
         */
            function (req) {
                /** @type {?} */
                var entry = this.cacheMap.get(req.urlWithParams);
                if (!entry) {
                    return null;
                }
                /** @type {?} */
                var isExpired = (Date.now() - entry.entryTime) > MAX_CACHE_AGE;
                return isExpired ? null : entry.response;
            };
        /**
         * @param {?} req
         * @param {?} res
         * @return {?}
         */
        CacheService.prototype.put = /**
         * @param {?} req
         * @param {?} res
         * @return {?}
         */
            function (req, res) {
                /** @type {?} */
                var entry = { url: req.urlWithParams, response: res, entryTime: Date.now() };
                this.cacheMap.set(req.urlWithParams, entry);
                this.deleteExpired();
            };
        /**
         * @param {?} url
         * @return {?}
         */
        CacheService.prototype.invalidate = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
                this.cacheMap.delete(url);
            };
        /**
         * @private
         * @return {?}
         */
        CacheService.prototype.deleteExpired = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.cacheMap.forEach(( /**
                 * @param {?} entry
                 * @return {?}
                 */function (entry) {
                    if ((Date.now() - entry.entryTime) > MAX_CACHE_AGE) {
                        _this.cacheMap.delete(entry.url);
                    }
                }));
            };
        CacheService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ CacheService.ngInjectableDef = i0.defineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });
        return CacheService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //const CACHABLE_URL = "/api/booksSearch";
    var CacheInterceptor = /** @class */ (function () {
        function CacheInterceptor(cacheService, configuration) {
            this.cacheService = cacheService;
            this.configuration = configuration;
        }
        /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
        CacheInterceptor.prototype.intercept = /**
         * @param {?} req
         * @param {?} next
         * @return {?}
         */
            function (req, next) {
                var _this = this;
                if (!this.isRequestCachable(req)) {
                    return next.handle(req);
                }
                /** @type {?} */
                var response = this.cacheService.get(req);
                if (response !== null) {
                    return rxjs.of(response);
                }
                return next.handle(req).pipe(operators.tap(( /**
                 * @param {?} event
                 * @return {?}
                 */function (event) {
                    if (event instanceof http.HttpResponse) {
                        _this.cacheService.put(req, event);
                    }
                })));
            };
        /**
         * @private
         * @param {?} req
         * @return {?}
         */
        CacheInterceptor.prototype.isRequestCachable = /**
         * @private
         * @param {?} req
         * @return {?}
         */
            function (req) {
                return (req.method === 'GET') && (this.configuration.cache.urls.find(( /**
                 * @param {?} url
                 * @return {?}
                 */function (url) { return req.url.indexOf(url) > -1; })));
            };
        CacheInterceptor.decorators = [
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        CacheInterceptor.ctorParameters = function () {
            return [
                { type: CacheService },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorUtilsConfiguration',] }] }
            ];
        };
        return CacheInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var UtilsModule = /** @class */ (function () {
        function UtilsModule() {
        }
        /**
         * @param {?} configuration
         * @return {?}
         */
        UtilsModule.forRoot = /**
         * @param {?} configuration
         * @return {?}
         */
            function (configuration) {
                return {
                    ngModule: UtilsModule,
                    providers: [
                        { provide: 'FactorUtilsConfiguration', useValue: configuration }
                    ]
                };
            };
        UtilsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: []
                    },] }
        ];
        return UtilsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FilesService = FilesService;
    exports.GoogleAnalyticsErrorHandler = GoogleAnalyticsErrorHandler;
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.GoogleTagManagerErrorHandler = GoogleTagManagerErrorHandler;
    exports.GoogleTagManagerService = GoogleTagManagerService;
    exports.StorageService = StorageService;
    exports.CacheService = CacheService;
    exports.CacheInterceptor = CacheInterceptor;
    exports.UtilsModule = UtilsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-utils.umd.js.map