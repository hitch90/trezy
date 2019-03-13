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
}
