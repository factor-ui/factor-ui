(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('factor-utils', ['exports', '@angular/router', '@angular/core'], factory) :
    (factory((global['factor-utils'] = {}),global.ng.router,global.ng.core));
}(this, (function (exports,i1,i0) { 'use strict';

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
    var GoogleAnalyticsService = /** @class */ (function () {
        function GoogleAnalyticsService(router, configuration) {
            var _this = this;
            this.router = router;
            this.configuration = configuration;
            router.events.subscribe(function (event) {
                try {
                    if (typeof gtag === 'function') {
                        if (event instanceof i1.NavigationEnd) {
                            setTimeout(function () {
                                gtag('config', _this.configuration.gaTrackingId, {
                                    'page_title': document.title,
                                    'page_path': event.urlAfterRedirects
                                });
                            }, 100);
                        }
                    }
                }
                catch (e) {
                    console.error(e);
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
                    if (this.configuration && this.configuration.gaTrackingId) {
                        /** @type {?} */
                        var s1 = document.createElement('script');
                        s1.async = true;
                        s1.src = "https://www.googletagmanager.com/gtag/js?id=" + this.configuration.gaTrackingId;
                        document.head.appendChild(s1);
                        /** @type {?} */
                        var s2 = document.createElement('script');
                        s2.innerHTML = "\n         window.dataLayer = window.dataLayer || [];\n         function gtag(){dataLayer.push(arguments);}\n         gtag('js', new Date());\n         gtag('config', '" + this.configuration.gaTrackingId + "');\n       ";
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GoogleAnalyticsService.ctorParameters = function () {
            return [
                { type: i1.Router },
                { type: undefined, decorators: [{ type: i0.Inject, args: ['FactorUtilsConfiguration',] }] }
            ];
        };
        /** @nocollapse */ GoogleAnalyticsService.ngInjectableDef = i0.defineInjectable({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(i0.inject(i1.Router), i0.inject("FactorUtilsConfiguration")); }, token: GoogleAnalyticsService, providedIn: "root" });
        return GoogleAnalyticsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.StorageService = StorageService;
    exports.GoogleAnalyticsService = GoogleAnalyticsService;
    exports.UtilsModule = UtilsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=factor-utils.umd.js.map