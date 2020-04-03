import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as ɵngcc0 from '@angular/core';
export declare class LoginGuard implements CanActivate {
    private authService;
    private router;
    private configuration;
    constructor(authService: AuthService, router: Router, configuration: any);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginGuard, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsibG9naW4uZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIExvZ2luR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlcjtcbiAgICBwcml2YXRlIGNvbmZpZ3VyYXRpb247XG4gICAgY29uc3RydWN0b3IoYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCByb3V0ZXI6IFJvdXRlciwgY29uZmlndXJhdGlvbjogYW55KTtcbiAgICBjYW5BY3RpdmF0ZShuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHwgUHJvbWlzZTxib29sZWFuIHwgVXJsVHJlZT4gfCBib29sZWFuIHwgVXJsVHJlZTtcbn1cbiJdfQ==