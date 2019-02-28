import { Injectable} from '@angular/core';
import { Notification, NotificationTypes } from '../_models';
import { Toastr } from 'ng6-toastr-notifications';


@Injectable({
  providedIn: 'root'
})
export class NotifyToastrFactory {

  constructor() { }

  createToastrNotify(notify: Notification) {
    switch (notify.type) {
      case NotificationTypes.SUCCESS:
        return new Toastr('success', notify.body, notify.title);
      case NotificationTypes.ERROR:
        return new Toastr('error', notify.body, notify.title);
      case NotificationTypes.INFO:
        return new Toastr('info', notify.body, notify.title);
      case NotificationTypes.WARNING:
        return new Toastr('warning', notify.body, notify.title);
    }
  }
}
