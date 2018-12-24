/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class StorageService {
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
/** @nocollapse */ StorageService.ngInjectableDef = i0.defineInjectable({ factory: function StorageService_Factory() { return new StorageService(); }, token: StorageService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLXV0aWxzLyIsInNvdXJjZXMiOlsibGliL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFLM0MsTUFBTSxPQUFPLGNBQWM7SUFFekIsZ0JBQWdCLENBQUM7Ozs7OztJQUVqQixNQUFNLENBQUMsR0FBVyxFQUFFLE9BQVE7UUFDMUIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNyQjthQUFJO1lBQ0gsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7Ozs7SUFDRCxHQUFHLENBQUMsR0FBVyxFQUFFLE9BQVE7O1lBQ25CLFdBQVc7O1lBQ1gsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1FBQ3hELElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSTtnQkFDRixXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLFdBQVcsR0FBRyxLQUFLLENBQUM7YUFDckI7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7SUFDRCxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQVUsRUFBRSxPQUFRO1FBQ25DLElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdEM7YUFBTTtZQUNMLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7O1lBaENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZGVsZXRlKGtleTogc3RyaW5nLCBzdG9yYWdlPykge1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICBkZWxldGUgc3RvcmFnZVtrZXldO1xuICAgIH1lbHNle1xuICAgICAgZGVsZXRlIHNlc3Npb25TdG9yYWdlW2tleV07XG4gICAgfVxuICB9XG4gIGdldChrZXk6IHN0cmluZywgc3RvcmFnZT8pIHtcbiAgICBsZXQgcGFyc2VkVmFsdWU7XG4gICAgbGV0IHZhbHVlID0gc3RvcmFnZSA/IHN0b3JhZ2Vba2V5XSA6IHNlc3Npb25TdG9yYWdlW2tleV07XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IEpTT04ucGFyc2UodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhcnNlZFZhbHVlID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRWYWx1ZTtcbiAgfVxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIHN0b3JhZ2U/KSB7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgIHN0b3JhZ2Vba2V5XSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2Vzc2lvblN0b3JhZ2Vba2V5XSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==