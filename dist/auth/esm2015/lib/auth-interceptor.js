import { __decorate, __param } from "tslib";
import { Inject, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
let AuthInterceptor = class AuthInterceptor {
    constructor(injector, configuration) {
        this.injector = injector;
        this.configuration = configuration;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    intercept(request, next) {
        this.authService = this.injector.get(AuthService);
        return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
                    case 401:
                        if (this.authService.getProvider().handle401Error !== 'undefined') {
                            return this.authService.getProvider().handle401Error(request, next);
                        }
                        else {
                            this.authService.getProvider().logout();
                            return throwError(error);
                        }
                        break;
                    default:
                        return throwError(error);
                        break;
                }
            }
            else {
                return throwError(error);
            }
        }));
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: Injector },
    { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
];
AuthInterceptor = __decorate([
    Injectable(),
    __param(1, Inject('FactorAuthConfiguration'))
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQTRCLGlCQUFpQixFQUFxRixNQUFNLHNCQUFzQixDQUFDO0FBQ3RLLE9BQU8sRUFBYyxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQTRDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFLMUIsWUFDVSxRQUFrQixFQUNpQixhQUFhO1FBRGhELGFBQVEsR0FBUixRQUFRLENBQVU7UUFDaUIsa0JBQWEsR0FBYixhQUFhLENBQUE7UUFMbEQsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLHdCQUFtQixHQUF5QixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsQ0FBQztJQUsvRSxDQUFDO0lBRUwsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDckYsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksS0FBSyxZQUFZLGlCQUFpQixFQUFFO2dCQUN0QyxRQUE0QixLQUFNLENBQUMsTUFBTSxFQUFFO29CQUN6QyxLQUFLLEdBQUc7d0JBQ04sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsS0FBSyxXQUFXLEVBQUU7NEJBQ2pFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUNyRTs2QkFBTTs0QkFDTCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUN4QyxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDMUI7d0JBQ0QsTUFBTTtvQkFDUjt3QkFDRSxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekIsTUFBTTtpQkFDVDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FFRixDQUFBOztZQTdCcUIsUUFBUTs0Q0FDekIsTUFBTSxTQUFDLHlCQUF5Qjs7QUFQeEIsZUFBZTtJQUQzQixVQUFVLEVBQUU7SUFRUixXQUFBLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO0dBUHpCLGVBQWUsQ0FtQzNCO1NBbkNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwU2VudEV2ZW50LCBIdHRwSGVhZGVyUmVzcG9uc2UsIEh0dHBQcm9ncmVzc0V2ZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBVc2VyRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgdGFrZSwgc3dpdGNoTWFwLCBmaW5hbGl6ZSwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL21vZGVscy90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgcmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICBwcml2YXRlIHJlZnJlc2hUb2tlblN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoJ0ZhY3RvckF1dGhDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwU2VudEV2ZW50IHwgSHR0cEhlYWRlclJlc3BvbnNlIHwgSHR0cFByb2dyZXNzRXZlbnQgfCBIdHRwUmVzcG9uc2U8YW55PiB8IEh0dHBVc2VyRXZlbnQ8YW55PiB8IGFueT4ge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYXV0aFNlcnZpY2UuZ2V0UHJvdmlkZXIoKS5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoICgoPEh0dHBFcnJvclJlc3BvbnNlPmVycm9yKS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmhhbmRsZTQwMUVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFByb3ZpZGVyKCkuaGFuZGxlNDAxRXJyb3IocmVxdWVzdCwgbmV4dCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==