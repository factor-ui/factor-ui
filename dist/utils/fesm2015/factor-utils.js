import { NavigationEnd, Router } from '@angular/router';
import { Injectable, NgModule, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StorageService {
    constructor() { }
    /**
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    delete(key, storage) {
        if (storage) {
            delete storage[key];
        }
        else {
            delete sessionStorage[key];
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
        /** @type {?} */
        let value = storage ? storage[key] : sessionStorage[key];
        if (value) {
            try {
                parsedValue = JSON.parse(value);
            }
            catch (err) {
                parsedValue = value;
            }
        }
        return parsedValue;
    }
    /**
     * @param {?} key
     * @param {?} value
     * @param {?=} storage
     * @return {?}
     */
    set(key, value, storage) {
        if (storage) {
            storage[key] = JSON.stringify(value);
        }
        else {
            sessionStorage[key] = JSON.stringify(value);
        }
    }
}
StorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StorageService.ctorParameters = () => [];
/** @nocollapse */ StorageService.ngInjectableDef = defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });

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
        router.events.subscribe((/**
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
            }
        }
        catch (ex) {
            console.error('Error appending google analytics');
            console.error(ex);
        }
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

export { StorageService, GoogleAnalyticsService, GoogleTagManagerService, UtilsModule };

//# sourceMappingURL=factor-utils.js.map