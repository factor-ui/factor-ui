(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('crypto-js'), require('@angular/common'), require('@angular/router'), require('@angular/common/http'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('factor-utils', ['exports', 'crypto-js', '@angular/common', '@angular/router', '@angular/common/http', 'rxjs', '@angular/core'], factory) :
    (factory((global['factor-utils'] = {}),global.CryptoJS,global.ng.common,global.ng.router,global.ng.common.http,global.rxjs,global.ng.core));
}(this, (function (exports,CryptoJS,common,i1,http,rxjs,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                            case 'localStorage':
                                delete localStorage[key];
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
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
        StorageService.prototype.getValue = /**
         * @param {?} key
         * @param {?=} storage
         * @return {?}
         */
            function (key, storage) {
                /** @type {?} */
                var value;
                if (!storage || typeof storage == 'string') {
                    switch (storage) {
                        case 'localStorage':
                            value = localStorage[key];
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
         * @param {?} value
         * @return {?}
         */
        StorageService.prototype.decrypt = /**
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
         * @param {?} value
         * @return {?}
         */
        StorageService.prototype.encrypt = /**
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
                }
                return value.toString();
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
                            case 'localStorage':
                                localStorage[key] = valueEncrypted;
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                }
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleTagManagerService = /** @class */ (function () {
        function GoogleTagManagerService() {
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
                    if (trackingId) {
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
        GoogleTagManagerService.ctorParameters = function () { return []; };
        /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(); }, token: GoogleTagManagerService, providedIn: "root" });
        return GoogleTagManagerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FilesList = /** @class */ (function () {
        function FilesList(options) {
            var _this = this;
            this.valueChangesSubject = new rxjs.BehaviorSubject(null);
            this.valueChanges = this.valueChangesSubject.asObservable();
            this.fileInput = document.createElement('input');
            this.fileInput.style.display = 'none';
            this.fileInput.type = 'file';
            this.fileInput.accept = options && options.accept ? options.accept : '';
            this.fileInput.multiple = options && options.multiple;
            this.fileInput.addEventListener('change', ( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                /** @type {?} */
                var reader = new FileReader();
                _this.loadValue(event.target.files);
            }));
            document.body.appendChild(this.fileInput);
        }
        /**
         * @private
         * @param {?} files
         * @return {?}
         */
        FilesList.prototype.loadValue = /**
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
                            data_1.push({
                                data: reader.result,
                                lastModifiedDate: file.lastModifiedDate,
                                name: file.name,
                                size: file.size /*,
                                type: file.type*/
                            });
                            if (data_1.length == files.length) {
                                _this.valueChangesSubject.next(data_1.length > 0 ? data_1 : null);
                            }
                        });
                    };
                    for (var i = 0; i < files.length; i++) {
                        _loop_1(i);
                    }
                }
            };
        /**
         * @return {?}
         */
        FilesList.prototype.open = /**
         * @return {?}
         */
            function () {
                this.fileInput.click();
            };
        return FilesList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.StorageService = StorageService;
    exports.GoogleAnalyticsErrorHandler = GoogleAnalyticsErrorHandler;
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.GoogleTagManagerErrorHandler = GoogleTagManagerErrorHandler;
    exports.GoogleTagManagerService = GoogleTagManagerService;
    exports.FilesList = FilesList;
    exports.UtilsModule = UtilsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-utils.umd.js.map