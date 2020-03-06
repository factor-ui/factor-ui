import { HttpRequest, HttpHandler } from '@angular/common/http';
import { BehaviorSubject, Observable } from "rxjs";

import { Login } from './models/login';

export interface AuthProvider {
  loggedIn: Observable<boolean>;
  addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any>;
  checkLoggedIn(): Observable<boolean>;
  getToken(): any;
  //handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any>;
  login(data: Login): Observable<any>;
  logout(): void;
}
