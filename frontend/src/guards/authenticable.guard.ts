import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { InertiaService } from 'src/app/services/inertia.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticableGuard implements CanActivate {
    constructor(private inertia: InertiaService, private router: Router) { };

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (!this.inertia.isAuthenticated) {
            this.router.navigate(['login']);
            return false;
        }

        return true;
    }
}

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private inertia: InertiaService, private router: Router) { };

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {

        if (this.inertia.isAuthenticated) {
            this.router.navigate(['/']);
            return false;
        }

        return true;
    }
}
