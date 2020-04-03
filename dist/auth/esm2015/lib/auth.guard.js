import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
let AuthGuard = class AuthGuard {
    constructor(authService, configuration) {
        this.authService = authService;
        this.configuration = configuration;
    }
    canActivate(next, state) {
        if (this.authService.getProvider().getToken()) {
            return true;
        }
        else {
            this.authService.getProvider().logout();
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: AuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });
AuthGuard = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(1, Inject('FactorAuthConfiguration'))
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzdDLElBQWEsU0FBUyxHQUF0QixNQUFhLFNBQVM7SUFFcEIsWUFDVSxXQUF3QixFQUNXLGFBQWE7UUFEaEQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDVyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtJQUN0RCxDQUFDO0lBRUwsV0FBVyxDQUNULElBQTRCLEVBQzVCLEtBQTBCO1FBQzFCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFkd0IsV0FBVzs0Q0FDL0IsTUFBTSxTQUFDLHlCQUF5Qjs7O0FBSnhCLFNBQVM7SUFIckIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUtHLFdBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7R0FKekIsU0FBUyxDQWlCckI7U0FqQlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ0ZhY3RvckF1dGhDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgY2FuQWN0aXZhdGUoXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZSB7XG4gICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuZ2V0UHJvdmlkZXIoKS5nZXRUb2tlbigpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmxvZ291dCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19