import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
import { StorageService } from './storage.service';
export declare class AuthService {
    private http;
    private injector;
    private storageService;
    private environment;
    private loggedInSource;
    loggedIn$: Observable<boolean>;
    private configurationSource;
    configuration$: Observable<any>;
    router: Router;
    constructor(http: HttpClient, injector: Injector, storageService: StorageService, environment: any);
    login(formValue: {
        username: string;
        password: string;
    }): Observable<any>;
    logout(redirect?: string): void;
    getConfiguration(): Observable<any>;
    getToken(): any;
    checkAuth(): false | import("rxjs/internal/Subscription").Subscription;
}
