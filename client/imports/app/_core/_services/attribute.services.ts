import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { Attribute } from '../../../../../imports/models/attributes';

@Injectable({
  providedIn: 'root'
})
export class AttributeService {
  constructor() {}

  add(attribute: Attribute): Observable<any> {
    return MeteorObservable.call('addAttribute', attribute);
  }
  remove(id: string): Observable<any> {
    return MeteorObservable.call('removeAttribute', id);
  }
  update(attribute: Attribute): Observable<any> {
    return MeteorObservable.call('updateAttribute', attribute);
  }
  get(id: string): Observable<Attribute> {
    let attr$;
    attr$ = MeteorObservable.call('getAttribute', id);
    return new Observable(observer => {
      attr$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
}
