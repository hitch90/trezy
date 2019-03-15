import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalizationService {
  constructor() {}
  set(content: object): Observable<any> {
    return MeteorObservable.call('setPersonalization', content);
  }

  get(place: string): Observable<object> {
    let personalization$;
    personalization$ = MeteorObservable.call('getPersonalization', place);
    return new Observable(observer => {
      personalization$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
}
