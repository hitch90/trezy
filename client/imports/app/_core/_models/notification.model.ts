export enum NotificationTypes {
  'ERROR',
  'SUCCESS',
  'INFO',
  'WARNING',
}

export interface Notification {
  type: NotificationTypes;
  title: string;
  body: string;
}
