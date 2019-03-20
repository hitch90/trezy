import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {MeteorObservable} from "meteor-rxjs";
import {Test} from "../../../../../imports/models/tests";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor(private apiService: ApiService) {}

  getInfoApi(id): Observable<any> {
    const httpParams = new HttpParams()
      .set('part', 'snippet')
      .set('id', id)
      .set('key', environment.api_key);
    return this.apiService.get('videos', httpParams);
  }
  add(test:Test): Observable<any> {
    return MeteorObservable.call('addTest', test);
  }
  getForProduct(product:string, type: string = 'text') {
    let tests$;
    tests$ = MeteorObservable.call('getTestsForProduct', product, type);
    return new Observable(observer => {
      tests$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });
  }
  getNewest():Observable<Test> {
    let tests$;
    tests$ = MeteorObservable.call('getNewestTests');
    return new Observable(observer => {
      tests$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });
  }
  count(product: string):Observable<number> {
    let tests$;
    tests$ = MeteorObservable.call('getCountTests', product);
    return new Observable(observer => {
      tests$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
}
