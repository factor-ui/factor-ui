import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, configuration) {
        this.authService = authService;
        this.configuration = configuration;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.getProvider().getToken()) {
            return true;
        }
        else {
            this.authService.getProvider().logout();
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    AuthGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthGuard_Factory() { return new AuthGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject("FactorAuthConfiguration")); }, token: AuthGuard, providedIn: "root" });
    AuthGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(1, Inject('FactorAuthConfiguration'))
    ], AuthGuard);
    return AuthGuard;
}());
export { AuthGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzdDO0lBRUUsbUJBQ1UsV0FBd0IsRUFDVyxhQUFhO1FBRGhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ1csa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDdEQsQ0FBQztJQUVMLCtCQUFXLEdBQVgsVUFDRSxJQUE0QixFQUM1QixLQUEwQjtRQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN4QyxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Z0JBYnNCLFdBQVc7Z0RBQy9CLE1BQU0sU0FBQyx5QkFBeUI7OztJQUp4QixTQUFTO1FBSHJCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7UUFLRyxXQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO09BSnpCLFNBQVMsQ0FpQnJCO29CQTFCRDtDQTBCQyxBQWpCRCxJQWlCQztTQWpCWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmdldFRva2VuKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlLmdldFByb3ZpZGVyKCkubG9nb3V0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iXX0=