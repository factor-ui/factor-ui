import { HttpClient } from '@angular/common/http';
import { StorageService } from 'factor-utils';
import { JwtService } from './jwt.service';
import { OAuthService } from './oauth.service';
import { AuthProvider } from './auth-provider';
import * as ɵngcc0 from '@angular/core';
export declare class AuthService {
    private http;
    private storageService;
    private jwtService;
    private oauthService;
    private configuration;
    constructor(http: HttpClient, storageService: StorageService, jwtService: JwtService, oauthService: OAuthService, configuration: any);
    getProvider(): AuthProvider;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AuthService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImF1dGguc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdG9yYWdlU2VydmljZSB9IGZyb20gJ2ZhY3Rvci11dGlscyc7XG5pbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnLi9qd3Quc2VydmljZSc7XG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi9hdXRoLXByb3ZpZGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGh0dHA7XG4gICAgcHJpdmF0ZSBzdG9yYWdlU2VydmljZTtcbiAgICBwcml2YXRlIGp3dFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBvYXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjb25maWd1cmF0aW9uO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIHN0b3JhZ2VTZXJ2aWNlOiBTdG9yYWdlU2VydmljZSwgand0U2VydmljZTogSnd0U2VydmljZSwgb2F1dGhTZXJ2aWNlOiBPQXV0aFNlcnZpY2UsIGNvbmZpZ3VyYXRpb246IGFueSk7XG4gICAgZ2V0UHJvdmlkZXIoKTogQXV0aFByb3ZpZGVyO1xufVxuIl19