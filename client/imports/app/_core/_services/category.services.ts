import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { Category } from '../../../../../imports/models/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor() {}

  add(category: Category): Observable<any> {
    return MeteorObservable.call('addCategory', category);
  }
  getChildren(parent: string): Observable<any> {
    return MeteorObservable.call('getChildrenCategories', parent);
  }
  remove(id: string): Observable<any> {
    return MeteorObservable.call('removeCategory', id);
  }
}
