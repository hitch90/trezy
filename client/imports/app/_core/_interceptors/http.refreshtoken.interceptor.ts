import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { IdentityService, JwtService } from '../_services';
import { throwError as observableThrowError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { Identity } from '../_models';

@Injectable()
export class HttpRefreshTokenInterceptor implements HttpInterceptor {
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );
    constructor(public identityService: IdentityService, public jwtService: JwtService) {}

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(error => {

                if (
                    request.url.includes('login') ||
                    request.url.includes('logout')
                ) {

                    if (request.url.includes('refresh-token')) {
                        this.identityService.purgeAuth();
                    }

                    return observableThrowError(error);
                }

                if (error.status !== 401) {
                    return observableThrowError(error);
                }
                if (this.refreshTokenInProgress) {
                    return this.refreshTokenSubject.pipe(
                        filter(result => result !== null),
                        take(1),
                        switchMap(() => next.handle(this.addAuthenticationToken(request))));
                } else {
                    this.refreshTokenInProgress = true;
                    this.refreshTokenSubject.next(null);
                    return this.identityService
                        .refreshAccessToken().pipe(
                            switchMap((identity: Identity) => {
                                this.refreshTokenInProgress = false;
                                this.refreshTokenSubject.next(identity.refreshToken);

                                return next.handle(this.addAuthenticationToken(request));
                            }),
                            catchError((err: any) => {
                                this.refreshTokenInProgress = false;

                                this.identityService.purgeAuth();
                                return observableThrowError(error);
                            }));
                }

            }));
    }

    addAuthenticationToken(request) {
        const accessToken = this.jwtService.getAccessToken();

        if (!accessToken) {
            return request;
        }

        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }


}
