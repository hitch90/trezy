import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { Identity } from '../_models';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private currentIdentitySubject = new BehaviorSubject<Identity>(
    {} as Identity
  );
  public currentIdentity = this.currentIdentitySubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private router: Router
  ) {}

  populate() {
    if (this.jwtService.getIdentity()) {
      this.apiService.get('/user').subscribe(
        data => this.setAuth(this.jwtService.getIdentity()),
        err => {
          this.purgeAuth();
        }
      );
    } else {
      this.purgeAuth();
    }
  }

  setAuth(identity: Identity) {
    this.jwtService.saveIdentity(identity);
    this.currentIdentitySubject.next(identity);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    if (this.jwtService.getIdentity()) {
      this.revoksTokens();
    }
    this.jwtService.destroyIdentity();
    this.currentIdentitySubject.next({} as Identity);
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(credentials): Observable<Identity> {
    return this.apiService.post('/auth/signin', credentials).pipe(
      map(data => {
        this.setAuth(data);
        return data;
      })
    );
  }

  attemptAuthExternal(externalProviderToken): Observable<Identity> {
    const httpParams = new HttpParams().set(
      'externalProviderToken',
      externalProviderToken
    );
    return this.apiService.post('/auth/signin-external', {}, httpParams).pipe(
      map(data => {
        this.setAuth(data);
        return data;
      })
    );
  }

  refreshAccessToken(): Observable<Identity> {
    const body = { refreshToken: this.jwtService.getRefreshToken() };
    return this.apiService.post('/tokens/refresh', body).pipe(
      map(data => {
        this.setAuth(data);
        return data;
      })
    );
  }

  revoksTokens(): void {
    const params = new HttpParams().set(
      'refreshToken',
      this.jwtService.getRefreshToken()
    );
    this.apiService
      .delete('/tokens/revoke', params)
      .subscribe(data => {}, err => {});
  }

  signup(body): Observable<any> {
    return this.apiService.post('/auth/signup', body);
  }

  signupWithExternal(body): Observable<any> {
    return this.apiService.post('/auth/signup-external', body);
  }

  // setPassword(data): Observable<any> {
  //     return this.apiService.post(`${this.baseUrl}/set-password`, data);
  // }
  //
  // resetPassword(data): Observable<any> {
  //     return this.apiService.post(`${this.baseUrl}/reset-password`, data);
  // }

  getCurrentIdentity(): Identity {
    return this.currentIdentitySubject.value;
  }
}
