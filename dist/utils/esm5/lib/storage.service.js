/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as CryptoJS from 'crypto-js';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(i0.inject(i0.PLATFORM_ID), i0.inject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
    return StorageService;
}());
export { StorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StorageService.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    StorageService.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLXV0aWxzLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE1BQU0sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDOzs7QUFHdEM7SUFLRSx3QkFDK0IsVUFBa0IsRUFDSCxhQUFhO1FBRDVCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDSCxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFFTCwrQkFBTTs7Ozs7SUFBTixVQUFPLEdBQVcsRUFBRSxPQUFRO1FBQzFCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUMxQyxRQUFRLE9BQU8sRUFBRTtvQkFDZixLQUFLLGNBQWM7d0JBQ2pCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixNQUFNO29CQUNSO3dCQUNFLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUMzQixNQUFNO2lCQUNUO2FBQ0Y7aUJBQU0sSUFBSSxPQUFPLE9BQU8sSUFBSSxRQUFRLEVBQUU7Z0JBQ3JDLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFDRCw0QkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVcsRUFBRSxPQUFROztZQUNuQixXQUFnQjtRQUNwQixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN0QyxJQUFJO2dCQUNGLFdBQVcsR0FB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LENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7O2dCQTVGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUk0QyxNQUFNLHVCQUE5QyxNQUFNLFNBQUMsV0FBVztnREFDbEIsTUFBTSxTQUFDLDBCQUEwQjs7O3lCQWJ0QztDQW1HQyxBQTdGRCxJQTZGQztTQTFGWSxjQUFjOzs7Ozs7SUFHdkIsb0NBQStDOzs7OztJQUMvQyx1Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuXG4vLyBPbmx5IHdvcmtzIG9uIGNsaWVudCBzdG9yYWdlXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgQEluamVjdCgnRmFjdG9yVXRpbHNDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgZGVsZXRlKGtleTogc3RyaW5nLCBzdG9yYWdlPykge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgdHlwZW9mIHN0b3JhZ2UgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpdGNoIChzdG9yYWdlKSB7XG4gICAgICAgICAgY2FzZSAnbG9jYWxTdG9yYWdlJzpcbiAgICAgICAgICAgIGRlbGV0ZSBsb2NhbFN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWxldGUgc2Vzc2lvblN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdG9yYWdlID09ICdvYmplY3QnKSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yYWdlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGdldChrZXk6IHN0cmluZywgc3RvcmFnZT8pOiBhbnkge1xuICAgIGxldCBwYXJzZWRWYWx1ZTogYW55O1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5nZXRWYWx1ZShrZXksIHN0b3JhZ2UpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5LCBzdG9yYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICB9XG4gIGdldFZhbHVlKGtleTogc3RyaW5nLCBzdG9yYWdlPzogYW55KTogYW55IHtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICBpZiAoIXN0b3JhZ2UgfHwgdHlwZW9mIHN0b3JhZ2UgPT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICBjYXNlICdsb2NhbFN0b3JhZ2UnOlxuICAgICAgICAgIHZhbHVlID0gbG9jYWxTdG9yYWdlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFsdWUgPSBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0b3JhZ2UgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gc3RvcmFnZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWNyeXB0KHZhbHVlKTtcbiAgfVxuICBkZWNyeXB0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbHVlICE9PSAnJyAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZSAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCkge1xuICAgICAgY29uc3QgZGVjcnlwdGVkVmFsdWUgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh2YWx1ZSwgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCk7XG4gICAgICB2YWx1ZSA9IGRlY3J5cHRlZFZhbHVlLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGVuY3J5cHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdmFsdWUgIT09ICcnICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gJiZcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdG9yYWdlICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZS5lbmNyeXB0aW9uU2VjcmV0KSB7XG4gICAgICB2YWx1ZSA9IENyeXB0b0pTLkFFUy5lbmNyeXB0KHZhbHVlLCB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZS5lbmNyeXB0aW9uU2VjcmV0KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPykge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jcnlwdChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgaWYgKCFzdG9yYWdlIHx8IHR5cGVvZiBzdG9yYWdlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICAgIGNhc2UgJ2xvY2FsU3RvcmFnZSc6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlRW5jcnlwdGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==