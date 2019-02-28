import {Injectable} from '@angular/core';
import { Notification, NotificationTypes } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class NotifyFactory {

  constructor() { }

  createNotify(type: string, title: string, body: string): Notification {
    switch (type) {
      default:
      case 'success':
        return {'type': NotificationTypes.SUCCESS, 'body': body, 'title': title};
      case 'error':
        return {'type': NotificationTypes.ERROR, 'body': body, 'title': title};
      case 'info':
        return {'type': NotificationTypes.INFO, 'body': body, 'title': title};
      case 'warning':
        return {'type': NotificationTypes.WARNING, 'body': body, 'title': title};
    }
  }

}
