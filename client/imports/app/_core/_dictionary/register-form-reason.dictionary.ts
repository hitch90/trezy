import { BaseReasonDictionary } from './base-reason.dictionary';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class RegisterFormReasonDictionary extends BaseReasonDictionary {
  messages = {
    DuplicateUserName: 'Adres e-mail jest już używany',
    InvalidEmail: 'Nieprawidłowy adres e-mail',
    PasswordTooShort: 'Podane hasło jest za krótkie'
  };
  defaultMessage = 'Wystąpił problem podczas rejestracji, sprawdź formularz i spróbuj ponownie';
}
 
