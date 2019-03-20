import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {map, take, tap} from 'rxjs/operators';
import {IdentityService} from '../_services';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(
      private router: Router,
      private identityService: IdentityService
  ) {
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.identityService.isAuthenticated.pipe(
        take(1),
        map(isAuth => !isAuth),
        tap(noauth => {
          if (!noauth) {
            this.router.navigateByUrl('/');
          }
        })
    );
  }
}
