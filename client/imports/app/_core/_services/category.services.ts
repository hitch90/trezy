import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {MeteorObservable} from "meteor-rxjs";
import {Category} from "../../../../../imports/models/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private apiService: ApiService) {}

  add(category:Category): Observable<any> {
    return MeteorObservable.call('addCategory', category);
  }
}
