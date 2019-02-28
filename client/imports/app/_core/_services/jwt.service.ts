import { Injectable } from '@angular/core';
import { Identity } from '../_models';


@Injectable({
    providedIn: 'root'
})
export class JwtService {

    getIdentity(): Identity {
        return (window.localStorage['identity'] !== undefined ? JSON.parse(window.localStorage['identity']) : false);
    }

    getAccessToken(): string {
        const identity = this.getIdentity();
        if (identity) {
            return identity.accessToken;
        }
        return '';
    }

    getRefreshToken(): string {
        const identity = this.getIdentity();
        if (identity) {
            return identity.refreshToken;
        }
        return '';
    }

    saveIdentity(identity: Identity) {
        window.localStorage['identity'] = JSON.stringify(identity);
    }

    destroyIdentity() {
        window.localStorage.removeItem('identity');
    }

}
