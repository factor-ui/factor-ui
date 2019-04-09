(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('factor-utils', ['exports', '@angular/router', '@angular/core'], factory) :
    (factory((global['factor-utils'] = {}),global.ng.router,global.ng.core));
}(this, (function (exports,i1,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GoogleAnalyticsService = /** @class */ (function () {
        function GoogleAnalyticsService(router) {
            var _this = this;
            this.router = router;
            router.events.subscribe(( /**
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
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.GoogleTagManagerService = GoogleTagManagerService;
    exports.UtilsModule = UtilsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-utils.umd.js.map