import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from 'factor-utils';
export declare class AuthService {
    private http;
    private injector;
    private storageService;
    private configuration;
    private loggedInSource;
    loggedIn: Observable<boolean>;
    private router;
    constructor(http: HttpClient, injector: Injector, storageService: StorageService, configuration: any);
    login(form: any, redirect?: string): Observable<any>;
    logout(redirect?: string): void;
    getToken(): any;
    refreshToken(): Observable<any>;
}
