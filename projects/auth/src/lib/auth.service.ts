import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { StorageService } from 'factor-utils';

import { Token } from './models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loggedIn: Observable<boolean> = this.loggedInSource.asObservable();

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    @Inject('FactorAuthConfiguration') private configuration
  ) {
    if (this.getToken() && this.getToken().access_token) {
      this.loggedInSource.next(true);
    }
  }

  checkLoggedIn() {
    if (this.storageService.get('token', 'local')) {
      this.loggedInSource.next(true);
    } else {
      this.loggedInSource.next(false);
    }
    return this.loggedIn;
  }
  getToken(): Token {
    return this.storageService.get('token', 'local');
  }
  login(form: { username: string, password: string }): Observable<Token> {
    const params = {
      client_id: this.configuration.clientId,
      client_secret: this.configuration.clientSecret,
      grant_type: 'password',
      response_type: 'token',
      username: form.username,
      password: form.password,
      state: Date.now()
    };
    return this.http.post(this.configuration.tokenUrl, params).pipe(tap((token: Token) => {
      this.storageService.set('token', token, 'local');
      this.loggedInSource.next(true);
    }));
  }
  logout(): void {
    this.storageService.delete('token', 'local');
    this.loggedInSource.next(false);
  }
  refreshToken(): Observable<Token> {
    const token = this.storageService.get('token', 'local');
    const url = `${this.configuration.tokenUrl}`;
    const params = {
      client_id: this.configuration.clientId,
      client_secret: this.configuration.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token
    };
    return this.http.get(url, { params: params }).pipe(tap((token: Token) => {
      this.storageService.set('token', token, 'local');
    }));
  }
}
