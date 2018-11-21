import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedIn$: Observable<boolean> = this.loggedInSource.asObservable();
  private configurationSource: BehaviorSubject<any> = new BehaviorSubject<any>(false);
  configuration$: Observable<any> = this.configurationSource.asObservable();
  router: Router;

  constructor(
    private http: HttpClient,
    private injector: Injector,
    private storageService: StorageService,
    @Inject('environment') private environment
  ) { }

  login(formValue: { username: string, password: string }) {
    let body: object = Object.assign(formValue, {
      grant_type: 'password',
      response_type: 'token',
      client_id: this.environment.oauth.clientId,
      client_secret: this.environment.oauth.clientSecret
    });
    return this.http.post(this.environment.oauth.tokenUrl, body).pipe(tap((token: any) => {
      this.storageService.set('token', token);
    }));
  }
  logout(redirect?: string) {
    this.router = this.injector.get(Router);
    this.storageService.delete('token');
    this.loggedInSource.next(false);
    this.router.navigate(['/login', redirect? {redirect:redirect} : {}]);
  }
  getConfiguration() {
    return this.http.get(this.environment.configurationUrl).pipe(tap((response: any) => {
      this.loggedInSource.next(true);
      this.configurationSource.next(response);
      //Save last user loggedIn
      this.storageService.set('lastUser', {
        username: response.user.username,
        picture: response.picture
      }, localStorage);
    }));
  }
  getToken() {
    return this.storageService.get('token');
  }
  checkAuth() {
    if (this.getToken()) {
      let config = this.getConfiguration().subscribe(()=>{
        this.loggedInSource.next(true);
      }, (error)=>{
        if (error.status == 0) {
          this.router = this.injector.get(Router);
          this.router.navigateByUrl('/error/0', { skipLocationChange: true });
        }
      });
      return config;
    }else{
      return false;
    }
  }
}
