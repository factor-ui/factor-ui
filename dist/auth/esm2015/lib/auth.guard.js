/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class AuthGuard {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (this.authService.getToken()) {
            //TODO Verify session on server with Observable
            return true;
        }
        else {
            this.authService.logout(state.url);
            return false;
        }
    }
}
AuthGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: AuthService }
];
/** @nocollapse */ AuthGuard.ngInjectableDef = i0.defineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.inject(i1.AuthService)); }, token: AuthGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthGuard.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0MsTUFBTSxPQUFPLFNBQVM7Ozs7SUFFcEIsWUFDVSxXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUM5QixDQUFDOzs7Ozs7SUFFTCxXQUFXLENBQ1QsSUFBNEIsRUFDNUIsS0FBMEI7UUFDMUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQy9CLCtDQUErQztZQUMvQyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7OztZQW5CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxXQUFXOzs7Ozs7OztJQVFoQixnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZVxuICApIHsgfVxuXG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmF1dGhTZXJ2aWNlLmdldFRva2VuKCkpIHtcbiAgICAgIC8vVE9ETyBWZXJpZnkgc2Vzc2lvbiBvbiBzZXJ2ZXIgd2l0aCBPYnNlcnZhYmxlXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoc3RhdGUudXJsKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==