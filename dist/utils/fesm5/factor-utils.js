import { AES, enc } from 'crypto-js';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID, Injector, NgModule, defineInjectable, inject } from '@angular/core';

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
        if (isPlatformBrowser(this.platformId)) {
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
        if (isPlatformBrowser(this.platformId)) {
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
            var decryptedValue = AES.decrypt(value, this.configuration.storage.encryptionSecret);
            value = decryptedValue.toString(enc.Utf8);
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
            value = AES.encrypt(value, this.configuration.storage.encryptionSecret);
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
        if (isPlatformBrowser(this.platformId)) {
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StorageService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
    ]; };
    /** @nocollapse */ StorageService.ngInjectableDef = defineInjectable({ factory: function StorageService_Factory() { return new StorageService(inject(PLATFORM_ID), inject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
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
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            try {
                if (typeof gtag === 'function') {
                    if (event instanceof NavigationEnd && _this.trackingId) {
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
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
        if (category === void 0) { category = null; }
        if (label === void 0) { label = null; }
        if (value === void 0) { value = null; }
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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleAnalyticsService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ GoogleAnalyticsService.ngInjectableDef = defineInjectable({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(inject(Router)); }, token: GoogleAnalyticsService, providedIn: "root" });
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
        if (error instanceof HttpErrorResponse) {
            if (navigator.onLine) {
                /** @type {?} */
                var message = error.error ? JSON.stringify(error.error) : error.message;
                googleAnalyticsService.trackEvent(error.url, 'Http Error', error.status + " - " + message);
            }
        }
        else {
            /** @type {?} */
            var location_1 = this.injector.get(LocationStrategy);
            /** @type {?} */
            var message = error.message ? error.message : error.toString();
            /** @type {?} */
            var stack = error.stack ? error.stack : error.toString();
            /** @type {?} */
            var url = location_1 instanceof PathLocationStrategy ? location_1.path() : '';
            googleAnalyticsService.trackEvent(message, 'Javascript Error', stack);
        }
        throw error;
    };
    GoogleAnalyticsErrorHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAnalyticsErrorHandler.ctorParameters = function () { return [
        { type: Injector }
    ]; };
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
        if (error instanceof HttpErrorResponse) {
            if (navigator.onLine) {
                /** @type {?} */
                var message = error.error ? JSON.stringify(error.error) : error.message;
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: 'http_error',
                    error_message: message,
                    error_status: error.status,
                    error_url: error.url
                });
            }
        }
        else {
            /** @type {?} */
            var location_1 = this.injector.get(LocationStrategy);
            /** @type {?} */
            var message = error.message ? error.message : error.toString();
            /** @type {?} */
            var stack = error.stack ? error.stack : error.toString();
            /** @type {?} */
            var url = location_1 instanceof PathLocationStrategy ? location_1.path() : '';
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'javascript_error',
                error_message: message,
                error_stack: stack,
                error_url: url
            });
        }
        throw error;
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
                ((/** @type {?} */ (document.body))).prepend(s2);
            }
        }
        catch (ex) {
            console.error('Error appending google tag manager');
            console.error(ex);
        }
    };
    GoogleTagManagerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    GoogleTagManagerService.ctorParameters = function () { return []; };
    /** @nocollapse */ GoogleTagManagerService.ngInjectableDef = defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(); }, token: GoogleTagManagerService, providedIn: "root" });
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
        { type: NgModule, args: [{
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

export { StorageService, GoogleAnalyticsErrorHandler, GoogleAnalyticsService, GoogleTagManagerErrorHandler, GoogleTagManagerService, UtilsModule };

//# sourceMappingURL=factor-utils.js.map