import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Notification } from '../_models';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NotifyToastrFactory, NotifyFactory } from '../_factories';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationStream: Subject<Notification> = new Subject<Notification>();

  constructor(private toastr: ToastrManager,
              private notifyFactory: NotifyFactory,
              private notifyToastrFactory: NotifyToastrFactory) {
    this.notificationStream.subscribe((notify: Notification) => {
      const toastrNtf = notifyToastrFactory.createToastrNotify(notify);
      this.toastr.showToastr(toastrNtf);
    });
  }

  pushSuccess(title: string, body: string) {
    this.propagateNewNotify(this.createNotifyObject(
      'success',
      title,
      body,
    ));
  }

  pushError(title: string, body: string) {
    this.propagateNewNotify(this.createNotifyObject(
      'error',
      title,
      body,
    ));
  }

  pushWarning(title: string, body: string) {
    this.propagateNewNotify(this.createNotifyObject(
      'warning',
      title,
      body,
    ));
  }

  pushInfo(title: string, body: string) {
    this.propagateNewNotify(this.createNotifyObject(
      'info',
      title,
      body,
    ));
  }

  private createNotifyObject(type: string, title: string, body: string): Notification {
    return this.notifyFactory.createNotify(type, title, body);
  }

  private propagateNewNotify(notify: Notification) {
    this.notificationStream.next(notify);
  }

}
