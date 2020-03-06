import { Injector } from '@angular/core';
import { HttpHandler, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class AuthInterceptor {
    private injector;
    private configuration;
    private authService;
    private refreshTokenInProgress;
    private refreshTokenSubject;
    constructor(injector: Injector, configuration: any);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any>;
}
