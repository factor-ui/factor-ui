import { __decorate, __param } from "tslib";
import { Inject, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector, configuration) {
        this.injector = injector;
        this.configuration = configuration;
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        this.authService = this.injector.get(AuthService);
        return next.handle(this.authService.getProvider().addAuthenticationToken(request)).pipe(catchError(function (error) {
            if (error instanceof HttpErrorResponse) {
                switch (error.status) {
                    case 401:
                        if (_this.authService.getProvider().handle401Error !== 'undefined') {
                            return _this.authService.getProvider().handle401Error(request, next);
                        }
                        else {
                            _this.authService.getProvider().logout();
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
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: Injector },
        { type: undefined, decorators: [{ type: Inject, args: ['FactorAuthConfiguration',] }] }
    ]; };
    AuthInterceptor = __decorate([
        Injectable(),
        __param(1, Inject('FactorAuthConfiguration'))
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZhY3Rvci1hdXRoLyIsInNvdXJjZXMiOlsibGliL2F1dGgtaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQTRCLGlCQUFpQixFQUFxRixNQUFNLHNCQUFzQixDQUFDO0FBQ3RLLE9BQU8sRUFBYyxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQTRDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTdDO0lBS0UseUJBQ1UsUUFBa0IsRUFDaUIsYUFBYTtRQURoRCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2lCLGtCQUFhLEdBQWIsYUFBYSxDQUFBO1FBTGxELDJCQUFzQixHQUFHLEtBQUssQ0FBQztRQUMvQix3QkFBbUIsR0FBeUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLENBQUM7SUFLL0UsQ0FBQztJQUVMLG1DQUFTLEdBQVQsVUFBVSxPQUF5QixFQUFFLElBQWlCO1FBQXRELGlCQXVCQztRQXRCQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNyRixVQUFVLENBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFLLFlBQVksaUJBQWlCLEVBQUU7Z0JBQ3RDLFFBQTRCLEtBQU0sQ0FBQyxNQUFNLEVBQUU7b0JBQ3pDLEtBQUssR0FBRzt3QkFDTixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxLQUFLLFdBQVcsRUFBRTs0QkFDakUsT0FBTyxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQ3JFOzZCQUFNOzRCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7NEJBQ3hDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUMxQjt3QkFDRCxNQUFNO29CQUNSO3dCQUNFLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUN6QixNQUFNO2lCQUNUO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBM0JtQixRQUFRO2dEQUN6QixNQUFNLFNBQUMseUJBQXlCOztJQVB4QixlQUFlO1FBRDNCLFVBQVUsRUFBRTtRQVFSLFdBQUEsTUFBTSxDQUFDLHlCQUF5QixDQUFDLENBQUE7T0FQekIsZUFBZSxDQW1DM0I7SUFBRCxzQkFBQztDQUFBLEFBbkNELElBbUNDO1NBbkNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwSGFuZGxlciwgSHR0cFJlcXVlc3QsIEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwU2VudEV2ZW50LCBIdHRwSGVhZGVyUmVzcG9uc2UsIEh0dHBQcm9ncmVzc0V2ZW50LCBIdHRwUmVzcG9uc2UsIEh0dHBVc2VyRXZlbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgdGFrZSwgc3dpdGNoTWFwLCBmaW5hbGl6ZSwgc2hhcmUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tICcuL21vZGVscy90b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoSW50ZXJjZXB0b3Ige1xuICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBhbnk7XG4gIHByaXZhdGUgcmVmcmVzaFRva2VuSW5Qcm9ncmVzcyA9IGZhbHNlO1xuICBwcml2YXRlIHJlZnJlc2hUb2tlblN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KG51bGwpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIEBJbmplY3QoJ0ZhY3RvckF1dGhDb25maWd1cmF0aW9uJykgcHJpdmF0ZSBjb25maWd1cmF0aW9uXG4gICkgeyB9XG5cbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwU2VudEV2ZW50IHwgSHR0cEhlYWRlclJlc3BvbnNlIHwgSHR0cFByb2dyZXNzRXZlbnQgfCBIdHRwUmVzcG9uc2U8YW55PiB8IEh0dHBVc2VyRXZlbnQ8YW55PiB8IGFueT4ge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UgPSB0aGlzLmluamVjdG9yLmdldChBdXRoU2VydmljZSk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHRoaXMuYXV0aFNlcnZpY2UuZ2V0UHJvdmlkZXIoKS5hZGRBdXRoZW50aWNhdGlvblRva2VuKHJlcXVlc3QpKS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgc3dpdGNoICgoPEh0dHBFcnJvclJlc3BvbnNlPmVycm9yKS5zdGF0dXMpIHtcbiAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmhhbmRsZTQwMUVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmdldFByb3ZpZGVyKCkuaGFuZGxlNDAxRXJyb3IocmVxdWVzdCwgbmV4dCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5nZXRQcm92aWRlcigpLmxvZ291dCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==