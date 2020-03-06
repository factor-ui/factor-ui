/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    AuthService.prototype.getProvider = /**
     * @return {?}
     */
    function () {
        return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
    };
    AuthService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: StorageService },
        { type: JwtService },
        { type: OAuthService },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = i0.defineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.inject(i1.HttpClient), i0.inject(i2.StorageService), i0.inject(i3.JwtService), i0.inject(i4.OAuthService), i0.inject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());
export { AuthService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.storageService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.jwtService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.oauthService;
    /**
     * @type {?}
     * @private
     */
    AuthService.prototype.configuration;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBSS9DO0lBS0UscUJBQ1UsSUFBZ0IsRUFDaEIsY0FBOEIsRUFDOUIsVUFBc0IsRUFDdEIsWUFBMEIsRUFDUyxhQUFhO1FBSmhELFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDUyxrQkFBYSxHQUFiLGFBQWEsQ0FBQTtRQUV4RCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7O2dCQWpCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJRLFVBQVU7Z0JBSVYsY0FBYztnQkFFZCxVQUFVO2dCQUNWLFlBQVk7Z0RBY2hCLE1BQU0sU0FBQyx5QkFBeUI7OztzQkF0QnJDO0NBOEJDLEFBbEJELElBa0JDO1NBZlksV0FBVzs7Ozs7O0lBR3BCLDJCQUF3Qjs7Ozs7SUFDeEIscUNBQXNDOzs7OztJQUN0QyxpQ0FBOEI7Ozs7O0lBQzlCLG1DQUFrQzs7Ozs7SUFDbEMsb0NBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgU3RvcmFnZVNlcnZpY2UgfSBmcm9tICdmYWN0b3ItdXRpbHMnO1xuXG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnLi9qd3Quc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi9hdXRoLXByb3ZpZGVyJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi9tb2RlbHMvdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBqd3RTZXJ2aWNlOiBKd3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7XG4gICAgdGhpcy5nZXRQcm92aWRlcigpLmNoZWNrTG9nZ2VkSW4oKTtcbiAgfVxuXG4gIGdldFByb3ZpZGVyKCk6IEF1dGhQcm92aWRlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi50eXBlID09PSAnb2F1dGgnID8gdGhpcy5vYXV0aFNlcnZpY2UgOiB0aGlzLmp3dFNlcnZpY2U7XG4gIH1cbn1cbiJdfQ==