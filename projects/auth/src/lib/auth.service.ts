import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { StorageService } from 'factor-utils';

import { JwtService } from './jwt.service';
import { OAuthService } from './oauth.service';
import { AuthProvider } from './auth-provider';
import { Token } from './models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private jwtService: JwtService,
    private oauthService: OAuthService,
    @Inject('FactorAuthConfiguration') private configuration
  ) {
    this.getProvider().checkLoggedIn();
  }

  getProvider(): AuthProvider {
    return this.configuration.type === 'oauth' ? this.oauthService : this.jwtService;
  }
}
