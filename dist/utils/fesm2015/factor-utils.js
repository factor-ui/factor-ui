import { AES, enc } from 'crypto-js';
import { isPlatformBrowser, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Inject, Injectable, PLATFORM_ID, Injector, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Only works on client storage
class StorageService {
    /**
     * @param {?} platformId
     * @param {?} configuration
     */
    constructor(platformId, configuration) {
        this.platformId = platformId;
        this.configuration = configuration;
    }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    delete(key, storage) {
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
    }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    get(key, storage) {
        /** @type {?} */
        let parsedValue;
        if (isPlatformBrowser(this.platformId)) {
            try {
                parsedValue = JSON.parse(this.getValue(key, storage));
            }
            catch (err) {
                parsedValue = this.getValue(key, storage);
            }
        }
        return parsedValue;
    }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    getValue(key, storage) {
        /** @type {?} */
        let value;
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    decrypt(value) {
        if (value !== null &&
            value !== undefined &&
            value !== '' &&
            this.configuration &&
            this.configuration.storage &&
            this.configuration.storage.encryptionSecret) {
            /** @type {?} */
            const decryptedValue = AES.decrypt(value, this.configuration.storage.encryptionSecret);
            value = decryptedValue.toString(enc.Utf8);
        }
        return value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    encrypt(value) {
        if (value !== null &&
            value !== undefined &&
            value !== '' &&
            this.configuration &&
            this.configuration.storage &&
            this.configuration.storage.encryptionSecret) {
            value = AES.encrypt(value, this.configuration.storage.encryptionSecret);
        }
        return value.toString();
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} storage
     * @return {?}
     */
    set(key, value, storage) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const valueEncrypted = this.encrypt(JSON.stringify(value));
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
    }
}
StorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StorageService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
];
/** @nocollapse */ StorageService.ngInjectableDef = defineInjectable({ factory: function StorageService_Factory() { return new StorageService(inject(PLATFORM_ID), inject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleAnalyticsService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} trackingId
     * @return {?}
     */
    appendTrackingCode(trackingId) {
        try {
            if (trackingId) {
                this.trackingId = trackingId;
                /** @type {?} */
                const s1 = document.createElement('script');
                s1.async = true;
                s1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
                document.head.appendChild(s1);
                /** @type {?} */
                const s2 = document.createElement('script');
                s2.innerHTML = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${trackingId}');
       `;
                document.head.appendChild(s2);
                this.initSubscribers();
            }
        }
        catch (ex) {
            console.error('Error appending google analytics');
            console.error(ex);
        }
    }
    /**
     * @private
     * @return {?}
     */
    initSubscribers() {
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            try {
                if (typeof gtag === 'function') {
                    if (event instanceof NavigationEnd && this.trackingId) {
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            gtag('config', this.trackingId, {
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
     * @param {?} action
     * @param {?=} category
     * @param {?=} label
     * @param {?=} value
     * @return {?}
     */
    trackEvent(action, category = null, label = null, value = null) {
        if (typeof gtag === 'function') {
            gtag('event', action, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    }
    /**
     * @param {?} description
     * @param {?} fatal
     * @return {?}
     */
    trackException(description, fatal) {
        if (typeof gtag === 'function') {
            gtag('event', 'exception', {
                description: description,
                fatal: fatal
            });
        }
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    setUserId(userId) {
        if (typeof gtag === 'function') {
            gtag('set', { 'user_id': userId });
        }
    }
}
GoogleAnalyticsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleAnalyticsService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ GoogleAnalyticsService.ngInjectableDef = defineInjectable({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(inject(Router)); }, token: GoogleAnalyticsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleAnalyticsErrorHandler {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        /** @type {?} */
        const googleAnalyticsService = this.injector.get(GoogleAnalyticsService);
        if (error instanceof HttpErrorResponse) {
            if (navigator.onLine) {
                /** @type {?} */
                const message = error.error ? JSON.stringify(error.error) : error.message;
                googleAnalyticsService.trackEvent(error.url, 'Http Error', `${error.status} - ${message}`);
            }
        }
        else {
            /** @type {?} */
            const location = this.injector.get(LocationStrategy);
            /** @type {?} */
            const message = error.message ? error.message : error.toString();
            /** @type {?} */
            const stack = error.stack ? error.stack : error.toString();
            /** @type {?} */
            const url = location instanceof PathLocationStrategy ? location.path() : '';
            googleAnalyticsService.trackEvent(message, 'Javascript Error', stack);
        }
        throw error;
    }
}
GoogleAnalyticsErrorHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleAnalyticsErrorHandler.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleTagManagerErrorHandler {
    /**
     * @param {?} injector
     */
    constructor(injector) {
        this.injector = injector;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        if (error instanceof HttpErrorResponse) {
            if (navigator.onLine) {
                /** @type {?} */
                const message = error.error ? JSON.stringify(error.error) : error.message;
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
    }
}
GoogleTagManagerErrorHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GoogleTagManagerErrorHandler.ctorParameters = () => [
    { type: Injector }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleTagManagerService {
    constructor() { }
    /**
     * @param {?} trackingId
     * @return {?}
     */
    appendTrackingCode(trackingId) {
        try {
            if (trackingId) {
                this.trackingId = trackingId;
                /** @type {?} */
                const s1 = document.createElement('script');
                s1.innerHTML = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${trackingId}');
        `;
                document.head.appendChild(s1);
                /** @type {?} */
                const s2 = document.createElement('noscript');
                /** @type {?} */
                const s3 = document.createElement('iframe');
                s3.width = '0';
                s3.height = '0';
                s3.style.display = 'none';
                s3.style.visibility = 'hidden';
                s3.src = `https://www.googletagmanager.com/ns.html?id=${trackingId}`;
                s2.appendChild(s3);
                ((/** @type {?} */ (document.body))).prepend(s2);
            }
        }
        catch (ex) {
            console.error('Error appending google tag manager');
            console.error(ex);
        }
    }
    /**
     * @param {?} variable
     * @return {?}
     */
    addVariable(variable) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(variable);
    }
}
GoogleTagManagerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GoogleTagManagerService.ctorParameters = () => [];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(); }, token: GoogleTagManagerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilesList {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.valueChangesSubject = new BehaviorSubject(null);
        this.valueChanges = this.valueChangesSubject.asObservable();
        this.fileInput = document.createElement('input');
        this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.accept = options && options.accept ? options.accept : '';
        this.fileInput.multiple = options && options.multiple;
        this.fileInput.addEventListener('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const reader = new FileReader();
            this.loadValue(event.target.files);
        }));
        document.body.appendChild(this.fileInput);
    }
    /**
     * @private
     * @param {?} files
     * @return {?}
     */
    loadValue(files) {
        if (files && files.length > 0) {
            /** @type {?} */
            let data = [];
            for (let i = 0; i < files.length; i++) {
                /** @type {?} */
                const file = files.item(i);
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = (/**
                 * @return {?}
                 */
                () => {
                    data.push({
                        data: reader.result,
                        lastModifiedDate: file.lastModifiedDate,
                        name: file.name,
                        size: file.size /*,
                        type: file.type*/
                    });
                    if (data.length == files.length) {
                        this.valueChangesSubject.next(data.length > 0 ? data : null);
                    }
                });
            }
        }
    }
    /**
     * @return {?}
     */
    open() {
        this.fileInput.click();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UtilsModule {
    /**
     * @param {?} configuration
     * @return {?}
     */
    static forRoot(configuration) {
        return {
            ngModule: UtilsModule,
            providers: [
                { provide: 'FactorUtilsConfiguration', useValue: configuration }
            ]
        };
    }
}
UtilsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StorageService, GoogleAnalyticsErrorHandler, GoogleAnalyticsService, GoogleTagManagerErrorHandler, GoogleTagManagerService, FilesList, UtilsModule };

//# sourceMappingURL=factor-utils.js.map