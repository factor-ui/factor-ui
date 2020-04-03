import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
import * as i2 from "@angular/router";
var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router, configuration) {
        this.authService = authService;
        this.router = router;
        this.configuration = configuration;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (this.authService.getProvider().getToken()) {
            this.router.navigateByUrl('/');
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: Router },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    LoginGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoginGuard_Factory() { return new LoginGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i2.Router), i0.ɵɵinject("FactorAuthConfiguration")); }, token: LoginGuard, providedIn: "root" });
    LoginGuard = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(2, Inject('FactorAuthConfiguration'))
    ], LoginGuard);
    return LoginGuard;
}());
export { LoginGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9mYWN0b3ItYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9sb2dpbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLEVBQUUsbUJBQW1CLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHNUcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBSzdDO0lBRUUsb0JBQ1UsV0FBd0IsRUFDeEIsTUFBYyxFQUNxQixhQUFhO1FBRmhELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDcUIsa0JBQWEsR0FBYixhQUFhLENBQUE7SUFDdEQsQ0FBQztJQUVMLGdDQUFXLEdBQVgsVUFDRSxJQUE0QixFQUM1QixLQUEwQjtRQUMxQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7O2dCQWRzQixXQUFXO2dCQUNoQixNQUFNO2dEQUNyQixNQUFNLFNBQUMseUJBQXlCOzs7SUFMeEIsVUFBVTtRQUh0QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO1FBTUcsV0FBQSxNQUFNLENBQUMseUJBQXlCLENBQUMsQ0FBQTtPQUx6QixVQUFVLENBa0J0QjtxQkEzQkQ7Q0EyQkMsQUFsQkQsSUFrQkM7U0FsQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7IH1cblxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4gfCBQcm9taXNlPGJvb2xlYW4gfCBVcmxUcmVlPiB8IGJvb2xlYW4gfCBVcmxUcmVlIHtcbiAgICBpZiAodGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmdldFRva2VuKCkpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy8nKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG4iXX0=