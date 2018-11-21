import { Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
export declare class AuthInterceptor {
    private injector;
    private authService;
    constructor(injector: Injector);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
