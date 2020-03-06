import { HttpClient } from '@angular/common/http';
import { StorageService } from 'factor-utils';
import { JwtService } from './jwt.service';
import { OAuthService } from './oauth.service';
import { AuthProvider } from './auth-provider';
export declare class AuthService {
    private http;
    private storageService;
    private jwtService;
    private oauthService;
    private configuration;
    constructor(http: HttpClient, storageService: StorageService, jwtService: JwtService, oauthService: OAuthService, configuration: any);
    getProvider(): AuthProvider;
}
