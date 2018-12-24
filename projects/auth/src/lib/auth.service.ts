import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { StorageService } from 'factor-utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedIn$: Observable<boolean> = this.loggedInSource.asObservable();
  router: Router;

  constructor(
    private http: HttpClient,
    private injector: Injector,
    private storageService: StorageService,
    @Inject('FactorAuthConfiguration') private configuration
  ) {
    this.router = injector.get(Router);
  }

  login(form: any, redirect?: string) {
    const params = {
      client_id: this.configuration.clientId,
      client_secret: this.configuration.clientSecret,
      grant_type: 'password',
      response_type: 'token',
      username: form.username,
      password: form.password
    };
    return this.http.post(this.configuration.tokenUrl, params).pipe(tap((token: any) => {
      this.storageService.set('token', token, localStorage);
      this.loggedInSource.next(true);
      if (redirect) {
        this.router.navigate([redirect]);
      }
    }));
  }
  logout(redirect?: string) {
    this.storageService.delete('token', localStorage);
    this.loggedInSource.next(false);
    this.router.navigate(['/login', redirect ? { redirect: redirect } : {}]);
  }
  getToken() {
    return this.storageService.get('token', localStorage);
  }
  refreshToken(): Observable<any> {
    const token = this.storageService.get('token', localStorage);
    const url = `${this.configuration.tokenUrl}`;
    const params = {
      client_id: this.configuration.clientId,
      client_secret: this.configuration.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token
    };
    return this.http.get(url, { params: params }).pipe(tap((token: any) => {
      this.storageService.set('token', token, localStorage);
    }));
  }
}
