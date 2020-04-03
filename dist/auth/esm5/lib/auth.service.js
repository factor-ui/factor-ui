import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from 'factor-utils';
import { JwtService } from './jwt.service';
import { OAuthService } from './oauth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "factor-utils";
import * as i3 from "./jwt.service";
import * as i4 from "./oauth.service";
var AuthService = /** @class */ (function () {
    function AuthService(http, storageService, jwtService, oauthService, configuration) {
        this.http = http;
        this.storageService = storageService;
        this.jwtService = jwtService;
        this.oauthService = oauthService;
        this.configuration = configuration;
        this.getProvider().checkLoggedIn();
    }
    AuthService.prototype.getProvider = function () {
        return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
    };
    AuthService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: StorageService },
        { type: JwtService },
        { type: OAuthService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject(i3.JwtService), i0.ɵɵinject(i4.OAuthService), i0.ɵɵinject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(4, Inject('FactorAuthConfiguration'))
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBTy9DO0lBRUUscUJBQ1UsSUFBZ0IsRUFDaEIsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsWUFBMEIsRUFDUyxhQUFhO1FBSmhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDUyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQUV4RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUNuRixDQUFDOztnQkFYZSxVQUFVO2dCQUNBLGNBQWM7Z0JBQ2xCLFVBQVU7Z0JBQ1IsWUFBWTtnREFDakMsTUFBTSxTQUFDLHlCQUF5Qjs7O0lBUHhCLFdBQVc7UUFIdkIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQVFHLFdBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7T0FQekIsV0FBVyxDQWV2QjtzQkE5QkQ7Q0E4QkMsQUFmRCxJQWVDO1NBZlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnZmFjdG9yLXV0aWxzJztcblxuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJy4vand0LnNlcnZpY2UnO1xuaW1wb3J0IHsgT0F1dGhTZXJ2aWNlIH0gZnJvbSAnLi9vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciB9IGZyb20gJy4vYXV0aC1wcm92aWRlcic7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gJy4vbW9kZWxzL3Rva2VuJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGp3dFNlcnZpY2U6IEp3dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvYXV0aFNlcnZpY2U6IE9BdXRoU2VydmljZSxcbiAgICBASW5qZWN0KCdGYWN0b3JBdXRoQ29uZmlndXJhdGlvbicpIHByaXZhdGUgY29uZmlndXJhdGlvblxuICApIHtcbiAgICB0aGlzLmdldFByb3ZpZGVyKCkuY2hlY2tMb2dnZWRJbigpO1xuICB9XG5cbiAgZ2V0UHJvdmlkZXIoKTogQXV0aFByb3ZpZGVyIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0aW9uLnR5cGUgPT09ICdvYXV0aCcgPyB0aGlzLm9hdXRoU2VydmljZSA6IHRoaXMuand0U2VydmljZTtcbiAgfVxufVxuIl19