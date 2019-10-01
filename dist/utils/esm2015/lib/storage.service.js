/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as CryptoJS from 'crypto-js';
import * as i0 from "@angular/core";
// Only works on client storage
export class StorageService {
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
            const decryptedValue = CryptoJS.AES.decrypt(value, this.configuration.storage.encryptionSecret);
            value = decryptedValue.toString(CryptoJS.enc.Utf8);
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
            value = CryptoJS.AES.encrypt(value, this.configuration.storage.encryptionSecret);
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
/** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(i0.inject(i0.PLATFORM_ID), i0.inject("FactorUtilsConfiguration")); }, token: StorageService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLXV0aWxzLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFhLE1BQU0sRUFBRSxVQUFVLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sS0FBSyxRQUFRLE1BQU0sV0FBVyxDQUFDOzs7QUFNdEMsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBR3pCLFlBQytCLFVBQWtCLEVBQ0gsYUFBYTtRQUQ1QixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQ0gsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDdkQsQ0FBQzs7Ozs7O0lBRUUsTUFBTSxDQUFDLEdBQVcsRUFBRSxPQUFRO1FBQ2pDLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLElBQUksT0FBTyxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUMxQyxRQUFRLE9BQU8sRUFBRTtvQkFDZixLQUFLLE9BQU8sQ0FBQztvQkFDYixLQUFLLGNBQWM7d0JBQ2pCLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUN6QixNQUFNO29CQUNSLEtBQUssUUFBUTt3QkFDWCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQy9CLE1BQU07b0JBQ1I7d0JBQ0UsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQzNCLE1BQU07aUJBQ1Q7YUFDRjtpQkFBTSxJQUFJLE9BQU8sT0FBTyxJQUFJLFFBQVEsRUFBRTtnQkFDckMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7Ozs7OztJQUNNLEdBQUcsQ0FBQyxHQUFXLEVB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TyxFQUFFO29CQUNmLEtBQUssT0FBTyxDQUFDO29CQUNiLEtBQUssY0FBYzt3QkFDakIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzt3QkFDbkMsTUFBTTtvQkFDUixLQUFLLFFBQVE7d0JBQ1gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUM7d0JBQ3pDLE1BQU07b0JBQ1I7d0JBQ0UsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQzt3QkFDckMsTUFBTTtpQkFDVDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUM7YUFDL0I7U0FDRjtJQUNILENBQUM7OztZQTVHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFLNEMsTUFBTSx1QkFBOUMsTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQywwQkFBMEI7Ozs7O0lBSnBDLHVDQUFtQjs7Ozs7SUFHakIsb0NBQStDOzs7OztJQUMvQyx1Q0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgSW5qZWN0YWJsZSwgT25Jbml0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgKiBhcyBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuXG4vLyBPbmx5IHdvcmtzIG9uIGNsaWVudCBzdG9yYWdlXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG4gIG1lbW9yeVN0b3JhZ2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBASW5qZWN0KCdGYWN0b3JVdGlsc0NvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBwdWJsaWMgZGVsZXRlKGtleTogc3RyaW5nLCBzdG9yYWdlPykge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgdHlwZW9mIHN0b3JhZ2UgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpdGNoIChzdG9yYWdlKSB7XG4gICAgICAgICAgY2FzZSAnbG9jYWwnOlxuICAgICAgICAgIGNhc2UgJ2xvY2FsU3RvcmFnZSc6XG4gICAgICAgICAgICBkZWxldGUgbG9jYWxTdG9yYWdlW2tleV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtZW1vcnknOlxuICAgICAgICAgICAgZGVsZXRlIHRoaXMubWVtb3J5U3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlbGV0ZSBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0b3JhZ2UgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZGVsZXRlIHN0b3JhZ2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcHVibGljIGdldChrZXk6IHN0cmluZywgc3RvcmFnZT8pOiBhbnkge1xuICAgIGxldCBwYXJzZWRWYWx1ZTogYW55O1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IEpTT04ucGFyc2UodGhpcy5nZXRWYWx1ZShrZXksIHN0b3JhZ2UpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUoa2V5LCBzdG9yYWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZFZhbHVlO1xuICB9XG4gIHByaXZhdGUgZ2V0VmFsdWUoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/OiBhbnkpOiBhbnkge1xuICAgIGxldCB2YWx1ZTogYW55O1xuICAgIGlmICghc3RvcmFnZSB8fCB0eXBlb2Ygc3RvcmFnZSA9PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChzdG9yYWdlKSB7XG4gICAgICAgIGNhc2UgJ2xvY2FsJzpcbiAgICAgICAgY2FzZSAnbG9jYWxTdG9yYWdlJzpcbiAgICAgICAgICB2YWx1ZSA9IGxvY2FsU3RvcmFnZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtZW1vcnknOlxuICAgICAgICAgIHZhbHVlID0gdGhpcy5tZW1vcnlTdG9yYWdlW2tleV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdmFsdWUgPSBzZXNzaW9uU3RvcmFnZVtrZXldO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0b3JhZ2UgPT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbHVlID0gc3RvcmFnZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5kZWNyeXB0KHZhbHVlKTtcbiAgfVxuICBwcml2YXRlIGRlY3J5cHQodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJlxuICAgICAgdmFsdWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdmFsdWUgIT09ICcnICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gJiZcbiAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5zdG9yYWdlICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZS5lbmNyeXB0aW9uU2VjcmV0KSB7XG4gICAgICBjb25zdCBkZWNyeXB0ZWRWYWx1ZSA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KHZhbHVlLCB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZS5lbmNyeXB0aW9uU2VjcmV0KTtcbiAgICAgIHZhbHVlID0gZGVjcnlwdGVkVmFsdWUudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBlbmNyeXB0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAodmFsdWUgIT09IG51bGwgJiZcbiAgICAgIHZhbHVlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHZhbHVlICE9PSAnJyAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uICYmXG4gICAgICB0aGlzLmNvbmZpZ3VyYXRpb24uc3RvcmFnZSAmJlxuICAgICAgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCkge1xuICAgICAgdmFsdWUgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdCh2YWx1ZSwgdGhpcy5jb25maWd1cmF0aW9uLnN0b3JhZ2UuZW5jcnlwdGlvblNlY3JldCk7XG4gICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICB9XG4gIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHN0b3JhZ2U/KSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnN0IHZhbHVlRW5jcnlwdGVkID0gdGhpcy5lbmNyeXB0KEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICBpZiAoIXN0b3JhZ2UgfHwgdHlwZW9mIHN0b3JhZ2UgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3dpdGNoIChzdG9yYWdlKSB7XG4gICAgICAgICAgY2FzZSAnbG9jYWwnOlxuICAgICAgICAgIGNhc2UgJ2xvY2FsU3RvcmFnZSc6XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Vba2V5XSA9IHZhbHVlRW5jcnlwdGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnbWVtb3J5JzpcbiAgICAgICAgICAgIHRoaXMubWVtb3J5U3RvcmFnZVtrZXldID0gdmFsdWVFbmNyeXB0ZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Vba2V5XSA9IHZhbHVlRW5jcnlwdGVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JhZ2Vba2V5XSA9IHZhbHVlRW5jcnlwdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19