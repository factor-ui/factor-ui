import * as ɵngcc0 from '@angular/core';
export declare class StorageService {
    private platformId;
    private configuration;
    memoryStorage: any;
    constructor(platformId: Object, configuration: any);
    private getValue;
    private decrypt;
    private encrypt;
    delete(key: string, storage?: any): void;
    get(key: string, storage?: any): any;
    set(key: string, value: any, storage?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StorageService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInN0b3JhZ2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmFnZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgcGxhdGZvcm1JZDtcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb247XG4gICAgbWVtb3J5U3RvcmFnZTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtSWQ6IE9iamVjdCwgY29uZmlndXJhdGlvbjogYW55KTtcbiAgICBwcml2YXRlIGdldFZhbHVlO1xuICAgIHByaXZhdGUgZGVjcnlwdDtcbiAgICBwcml2YXRlIGVuY3J5cHQ7XG4gICAgZGVsZXRlKGtleTogc3RyaW5nLCBzdG9yYWdlPzogYW55KTogdm9pZDtcbiAgICBnZXQoa2V5OiBzdHJpbmcsIHN0b3JhZ2U/OiBhbnkpOiBhbnk7XG4gICAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBzdG9yYWdlPzogYW55KTogdm9pZDtcbn1cbiJdfQ==