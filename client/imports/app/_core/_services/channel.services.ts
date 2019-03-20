import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {Channel} from "../../../../../imports/models/channels";
import {MeteorObservable} from "meteor-rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  constructor(private apiService: ApiService) {}

  getInfoApi(id): Observable<any> {
    const httpParams = new HttpParams()
      .set('part', 'snippet')
      .set('id', id)
      .set('key', environment.api_key);
    return this.apiService.get('channels', httpParams);
  }
  add(channel:Channel): Observable<any> {
    return MeteorObservable.call('addChannel', channel);
  }
  getAll(): Observable<Channel>{
    let channels$;
    channels$ = MeteorObservable.call('getAllChannels');
    return new Observable(observer => {
      channels$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });
  }
}


