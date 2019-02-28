import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IdentityService } from '../_services';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard {

    constructor(
        private router: Router,
        private identityService: IdentityService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.identityService.isAuthenticated.pipe(
            take(1),
            tap(auth => {
                if (!auth) {
                    this.router.navigateByUrl('/login');
                }
            })
        );
    }

}
