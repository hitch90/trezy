import { BaseReasonDictionary } from './base-reason.dictionary';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class LoginFormReasonDictionary extends BaseReasonDictionary {
  messages = {
    EmailNotExist: 'Podany adres e-mail nie istnieje',
    EmailNotConfirmed: 'Konto nie jest aktywne',
    InvalidCredential: 'Podane hasło nie jest poprawne'
  };
  defaultMessage = 'Wystąpił problem podczas logowania, sprawdź formularz i spróbuj ponownie';
}

