import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { Identity } from '../_models';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private currentIdentitySubject = new BehaviorSubject<any>(
      {} as Identity
  );
  public currentIdentity = this.currentIdentitySubject
      .asObservable()
      .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(

  ) {}
}
