import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from 'factor-utils';
import { Token } from './models/token';
export declare class AuthService {
    private http;
    private storageService;
    private configuration;
    private loggedInSource;
    loggedIn: Observable<boolean>;
    constructor(http: HttpClient, storageService: StorageService, configuration: any);
    checkLoggedIn(): Observable<boolean>;
    getToken(): Token;
    login(form: {
        username: string;
        password: string;
    }): Observable<Token>;
    logout(): void;
    refreshToken(): Observable<Token>;
}
