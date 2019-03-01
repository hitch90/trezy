import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { Producer } from '../../../../../imports/models/producers';

@Injectable({
  providedIn: 'root'
})
export class ProducerService {
  constructor() {}

  add(producer: Producer): Observable<any> {
    return MeteorObservable.call('addProducer', producer);
  }

  remove(id: string): Observable<any> {
    return MeteorObservable.call('removeProducer', id);
  }
}
