import { NavigationEnd, Router } from '@angular/router';
import { LocationStrategy, PathLocationStrategy, isPlatformBrowser } from '@angular/common';
import { AES, enc } from 'crypto-js';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable, Injector, Inject, PLATFORM_ID, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FilesService {
    //private valueChangesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    //private valueChanges: Observable<any[]> = this.valueChangesSubject.asObservable();
    constructor() {
        this.fileInput = document.createElement('input');
        //this.fileInput.style.display = 'none';
        this.fileInput.type = 'file';
        this.fileInput.addEventListener('change', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            /** @type {?} */
            const reader = new FileReader();
            this.loadValue(event.target.files);
        }));
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
                    data.push(Object.assign(file, {
                        data: reader.result
                    }));
                    if (data.length == files.length) {
                        //this.valueChangesSubject.next(data.length > 0 ? data : null);
                        this.callback(data.length > 0 ? data : null);
                        this.fileInput.value = null;
                    }
                });
            }
        }
    }
    /**
     * @param {?} callback
     * @param {?} options
     * @return {?}
     */
    open(callback, options) {
        this.fileInput.accept = options && options.accept ? options.accept : '';
        this.fileInput.multiple = options && options.multiple;
        this.fileInput.click();
        this.callback = callback;
    }
}
FilesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
FilesService.ctorParameters = () => [];
/** @nocollapse */ FilesService.ngInjectableDef = defineInjectable({ factory: function FilesService_Factory() { return new FilesService(); }, token: FilesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleTagManagerService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
    }
    /**
     * @param {?} trackingId
     * @return {?}
     */
    appendTrackingCode(trackingId) {
        try {
            if (isPlatformBrowser(this.platformId) && trackingId) {
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
GoogleTagManagerService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ GoogleTagManagerService.ngInjectableDef = defineInjectable({ factory: function GoogleTagManagerService_Factory() { return new GoogleTagManagerService(inject(PLATFORM_ID)); }, token: GoogleTagManagerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    getValue(key, storage) {
        /** @type {?} */
        let value;
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
    }
    /**
     * @private
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
     * @private
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
            return value.toString();
        }
        else {
            return value;
        }
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAX_CACHE_AGE = 60 * 60 * 1000;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CacheService {
    constructor() {
        this.cacheMap = new Map();
    }
    /**
     * @param {?} req
     * @return {?}
     */
    get(req) {
        /** @type {?} */
        const entry = this.cacheMap.get(req.urlWithParams);
        if (!entry) {
            return null;
        }
        /** @type {?} */
        const isExpired = (Date.now() - entry.entryTime) > MAX_CACHE_AGE;
        return isExpired ? null : entry.response;
    }
    /**
     * @param {?} req
     * @param {?} res
     * @return {?}
     */
    put(req, res) {
        /** @type {?} */
        const entry = { url: req.urlWithParams, response: res, entryTime: Date.now() };
        this.cacheMap.set(req.urlWithParams, entry);
        this.deleteExpired();
    }
    /**
     * @param {?} url
     * @return {?}
     */
    invalidate(url) {
        this.cacheMap.delete(url);
    }
    /**
     * @private
     * @return {?}
     */
    deleteExpired() {
        this.cacheMap.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            if ((Date.now() - entry.entryTime) > MAX_CACHE_AGE) {
                this.cacheMap.delete(entry.url);
            }
        }));
    }
}
CacheService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ CacheService.ngInjectableDef = defineInjectable({ factory: function CacheService_Factory() { return new CacheService(); }, token: CacheService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
//const CACHABLE_URL = "/api/booksSearch";
class CacheInterceptor {
    /**
     * @param {?} cacheService
     * @param {?} configuration
     */
    constructor(cacheService, configuration) {
        this.cacheService = cacheService;
        this.configuration = configuration;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    intercept(req, next) {
        if (!this.isRequestCachable(req)) {
            return next.handle(req);
        }
        /** @type {?} */
        const response = this.cacheService.get(req);
        if (response !== null) {
            return of(response);
        }
        return next.handle(req).pipe(tap((/**
         * @param {?} event
         * @return {?}
         */
        event => {
            if (event instanceof HttpResponse) {
                this.cacheService.put(req, event);
            }
        })));
    }
    /**
     * @private
     * @param {?} req
     * @return {?}
     */
    isRequestCachable(req) {
        return (req.method === 'GET') && (this.configuration.cache.urls.find((/**
         * @param {?} url
         * @return {?}
         */
        url => req.url.indexOf(url) > -1)));
    }
}
CacheInterceptor.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CacheInterceptor.ctorParameters = () => [
    { type: CacheService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FilesService, GoogleAnalyticsErrorHandler, GoogleAnalyticsService, GoogleTagManagerErrorHandler, GoogleTagManagerService, StorageService, CacheService, CacheInterceptor, UtilsModule };

//# sourceMappingURL=factor-utils.js.map