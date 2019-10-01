/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    StorageService.prototype.getValue = /**
     * @private
     * @param {?} key
     * @param {?=} storage
     * @return {?}
     */
    function (key, storage) {
        /** @type {?} */
        var value;
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
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    StorageService.prototype.decrypt = /**
     * @private
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
     * @private
     * @param {?} value
     * @return {?}
     */
    StorageService.prototype.encrypt = /**
     * @private
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
            return value.toString();
        }
        else {
            return value;
        }
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
    /** @type {?} */
    StorageService.prototype.memoryStorage;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLXV0aWxzLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE1BQU0sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDOzs7QUFHdEM7SUFNRSx3QkFDK0IsVUFBa0IsRUFDSCxhQUFhO1FBRDVCLGVBQVUsR0FBVixVQUFVLENBQVE7UUFDSCxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7SUFFRSwrQkFBTTs7Ozs7SUFBYixVQUFjLEdBQVcsRUFBRSxPQUFRO1FBQ2pDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUMxQyxRQUFRLE9BQU8sRUFBRTtvQkFDZixLQUFLLE9BQU8sQ0FBQztvQkFDYixLQUFLLGNBQWM7d0JBQ2pCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQy9CLE1BQU07b0JBQ1I7d0JBQ0UsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLE1BQU07aUJBQ1Q7YUFDRjtpQkFBTSxJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDckMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7Ozs7OztJQUNNLDRCQUFHOzs7OztJQUFWLFVBQVcsR0FBVyxF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TyxJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDMUMsUUFBUSxPQUFPLEVBQUU7b0JBQ2YsS0FBSyxPQUFPLENBQUM7b0JBQ2IsS0FBSyxjQUFjO3dCQUNqQixZQUFZLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO3dCQUNuQyxNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzt3QkFDekMsTUFBTTtvQkFDUjt3QkFDRSxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsY0FBYyxDQUFDO3dCQUNyQyxNQUFNO2lCQUNUO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzthQUMvQjtTQUNGO0lBQ0gsQ0FBQzs7Z0JBNUdGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSzRDLE1BQU0sdUJBQTlDLE1BQU0sU0FBQyxXQUFXO2dEQUNsQixNQUFNLFNBQUMsMEJBQTBCOzs7eUJBZHRDO0NBbUhDLEFBN0dELElBNkdDO1NBMUdZLGNBQWM7OztJQUN6Qix1Q0FBbUI7Ozs7O0lBR2pCLG9DQUErQzs7Ozs7SUFDL0MsdUNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIEluamVjdGFibGUsIE9uSW5pdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICogYXMgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcblxuLy8gT25seSB3b3JrcyBvbiBjbGllbnQgc3RvcmFnZVxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuICBtZW1vcnlTdG9yYWdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBPYmplY3QsXG4gICAgQEluamVjdCgnRmFjdG9yVXRpbHNDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgcHVibGljIGRlbGV0ZShrZXk6IHN0cmluZywgc3RvcmFnZT8pIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgaWYgKCFzdG9yYWdlIHx8IHR5cGVvZiBzdG9yYWdlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgICBjYXNlICdsb2NhbFN0b3JhZ2UnOlxuICAgICAgICAgICAgZGVsZXRlIGxvY2FsU3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWVtb3J5JzpcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1lbW9yeVN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWxldGUgc2Vzc2lvblN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdG9yYWdlID09ICdvYmplY3QnKSB7XG4gICAgICAgIGRlbGV0ZSBzdG9yYWdlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/KTogYW55IHtcbiAgICBsZXQgcGFyc2VkVmFsdWU6IGFueTtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSBKU09OLnBhcnNlKHRoaXMuZ2V0VmFsdWUoa2V5LCBzdG9yYWdlKSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgcGFyc2VkVmFsdWUgPSB0aGlzLmdldFZhbHVlKGtleSwgc3RvcmFnZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfVxuICBwcml2YXRlIGdldFZhbHVlKGtleTogc3RyaW5nLCBzdG9yYWdlPzogYW55KTogYW55IHtcbiAgICBsZXQgdmFsdWU6IGFueTtcbiAgICBpZiAoIXN0b3JhZ2UgfHwgdHlwZW9mIHN0b3JhZ2UgPT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICBjYXNlICdsb2NhbCc6XG4gICAgICAgIGNhc2UgJ2xvY2FsU3RvcmFnZSc6XG4gICAgICAgICAgdmFsdWUgPSBsb2NhbFN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVtb3J5JzpcbiAgICAgICAgICB2YWx1ZSA9IHRoaXMubWVtb3J5U3RvcmFnZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHZhbHVlID0gc2Vzc2lvblN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBzdG9yYWdlID09ICdvYmplY3QnKSB7XG4gICAgICB2YWx1ZSA9IHN0b3JhZ2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZGVjcnlwdCh2YWx1ZSk7XG4gIH1cbiAgcHJpdmF0ZSBkZWNyeXB0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbHVlICE9PSAnJyAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZSAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCkge1xuICAgICAgY29uc3QgZGVjcnlwdGVkVmFsdWUgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdCh2YWx1ZSwgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCk7XG4gICAgICB2YWx1ZSA9IGRlY3J5cHRlZFZhbHVlLnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHByaXZhdGUgZW5jcnlwdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsICYmXG4gICAgICB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB2YWx1ZSAhPT0gJycgJiZcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbiAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UgJiZcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdG9yYWdlLmVuY3J5cHRpb25TZWNyZXQpIHtcbiAgICAgIHZhbHVlID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQodmFsdWUsIHRoaXMuY29uZmlndXJhdGlvbi5zdG9yYWdlLmVuY3J5cHRpb25TZWNyZXQpO1xuICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgfVxuICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPykge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBjb25zdCB2YWx1ZUVuY3J5cHRlZCA9IHRoaXMuZW5jcnlwdChKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgaWYgKCFzdG9yYWdlIHx8IHR5cGVvZiBzdG9yYWdlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIHN3aXRjaCAoc3RvcmFnZSkge1xuICAgICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgICBjYXNlICdsb2NhbFN0b3JhZ2UnOlxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ21lbW9yeSc6XG4gICAgICAgICAgICB0aGlzLm1lbW9yeVN0b3JhZ2Vba2V5XSA9IHZhbHVlRW5jcnlwdGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdG9yYWdlW2tleV0gPSB2YWx1ZUVuY3J5cHRlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==