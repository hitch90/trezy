import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { InjectUser } from '../../front/accounts/annotations';

@InjectUser('user')
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  user: Meteor.User;
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(this.user);
    if (this.user && !this.user._id) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
