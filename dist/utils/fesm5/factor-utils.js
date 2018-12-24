import { Injectable, NgModule, defineInjectable } from '@angular/core';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StorageService.ctorParameters = function () { return []; };
    /** @nocollapse */ StorageService.ngInjectableDef = defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UtilsModule = /** @class */ (function () {
    function UtilsModule() {
    }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StorageService, UtilsModule };

//# sourceMappingURL=factor-utils.js.map