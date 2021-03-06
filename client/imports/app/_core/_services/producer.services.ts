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
  update(producer: Producer): Observable<any> {
    return MeteorObservable.call('updateProducer', producer);
  }
  get(id: string): Observable<Producer> {
    let producer$;
    producer$ = MeteorObservable.call('getProducer', id);
    return new Observable(observer => {
      producer$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
  getAll(): Observable<any> {
    let producer$;
    producer$ = MeteorObservable.call('getAllProducers');
    return new Observable(observer => {
      producer$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });
  }
  countProducts(producer: string): Observable<number> {
    let prodCount$;
    prodCount$ = MeteorObservable.call('countByProducerProducts', producer);
    return new Observable(observer => {
      prodCount$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
}
