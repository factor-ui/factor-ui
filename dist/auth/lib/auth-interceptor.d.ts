import { Injector } from '@angular/core';
import { HttpHandler, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class AuthInterceptor {
    private injector;
    private authService;
    private refreshTokenInProgress;
    private refreshTokenSubject;
    constructor(injector: Injector);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any>;
    handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<any>;
    addAuthenticationToken(request: any): HttpRequest<any>;
}
