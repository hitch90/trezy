interface ReasonDictionary {
  getMessage(reason: string);
}

export class BaseReasonDictionary implements ReasonDictionary {
  defaultMessage = 'Wystąpił błąd';

  messages = {};

  public getMessage(reason: string) {
    if (this.messages.hasOwnProperty(reason)) {
      return this.messages[reason];
    } else {
      return this.defaultMessage;
    }
  }
}
