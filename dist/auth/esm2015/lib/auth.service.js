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
let AuthService = class AuthService {
    constructor(http, storageService, jwtService, oauthService, configuration) {
        this.http = http;
        this.storageService = storageService;
        this.jwtService = jwtService;
        this.oauthService = oauthService;
        this.configuration = configuration;
        this.getProvider().checkLoggedIn();
    }
    getProvider() {
        return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
    }
};
AuthService.ctorParameters = () => [
    { type: HttpClient },
    { type: StorageService },
    { type: JwtService },
    { type: OAuthService },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService), i0.ɵɵinject(i3.JwtService), i0.ɵɵinject(i4.OAuthService), i0.ɵɵinject("FactorAuthConfiguration")); }, token: AuthService, providedIn: "root" });
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(4, Inject('FactorAuthConfiguration'))
], AuthService);
export { AuthService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZmFjdG9yLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUU5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7O0FBTy9DLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7SUFFdEIsWUFDVSxJQUFnQixFQUNoQixjQUE4QixFQUM5QixVQUFzQixFQUN0QixZQUEwQixFQUNTLGFBQWE7UUFKaEQsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNTLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBRXhELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ25GLENBQUM7Q0FDRixDQUFBOztZQVppQixVQUFVO1lBQ0EsY0FBYztZQUNsQixVQUFVO1lBQ1IsWUFBWTs0Q0FDakMsTUFBTSxTQUFDLHlCQUF5Qjs7O0FBUHhCLFdBQVc7SUFIdkIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQVFHLFdBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7R0FQekIsV0FBVyxDQWV2QjtTQWZZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ2ZhY3Rvci11dGlscyc7XG5cbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICcuL2p3dC5zZXJ2aWNlJztcbmltcG9ydCB7IE9BdXRoU2VydmljZSB9IGZyb20gJy4vb2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuL2F1dGgtcHJvdmlkZXInO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL21vZGVscy90b2tlbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTogU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBqd3RTZXJ2aWNlOiBKd3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsXG4gICAgQEluamVjdCgnRmFjdG9yQXV0aENvbmZpZ3VyYXRpb24nKSBwcml2YXRlIGNvbmZpZ3VyYXRpb25cbiAgKSB7XG4gICAgdGhpcy5nZXRQcm92aWRlcigpLmNoZWNrTG9nZ2VkSW4oKTtcbiAgfVxuXG4gIGdldFByb3ZpZGVyKCk6IEF1dGhQcm92aWRlciB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdGlvbi50eXBlID09PSAnb2F1dGgnID8gdGhpcy5vYXV0aFNlcnZpY2UgOiB0aGlzLmp3dFNlcnZpY2U7XG4gIH1cbn1cbiJdfQ==