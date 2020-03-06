import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
export declare class LoginGuard implements CanActivate {
    private authService;
    private router;
    private configuration;
    constructor(authService: AuthService, router: Router, configuration: any);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
