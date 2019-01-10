import { NavigationEnd, Router } from '@angular/router';
import { Injectable, NgModule, Inject, defineInjectable, inject } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GoogleAnalyticsService {
    /**
     * @param {?} router
     * @param {?} configuration
     */
    constructor(router, configuration) {
        this.router = router;
        this.configuration = configuration;
        router.events.subscribe(event => {
            try {
                if (typeof gtag === 'function') {
                    if (event instanceof NavigationEnd) {
                        setTimeout(() => {
                            gtag('config', this.configuration.gaTrackingId, {
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
    appendTrackingCode() {
        try {
            if (this.configuration && this.configuration.gaTrackingId) {
                /** @type {?} */
                const s1 = document.createElement('script');
                s1.async = true;
                s1.src = `https://www.googletagmanager.com/gtag/js?id=${this.configuration.gaTrackingId}`;
                document.head.appendChild(s1);
                /** @type {?} */
                const s2 = document.createElement('script');
                s2.innerHTML = `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${this.configuration.gaTrackingId}');
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
    { type: Router },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorUtilsConfiguration',] }] }
];
/** @nocollapse */ GoogleAnalyticsService.ngInjectableDef = defineInjectable({ factory: function GoogleAnalyticsService_Factory() { return new GoogleAnalyticsService(inject(Router), inject("FactorUtilsConfiguration")); }, token: GoogleAnalyticsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StorageService, GoogleAnalyticsService, UtilsModule };

//# sourceMappingURL=factor-utils.js.map