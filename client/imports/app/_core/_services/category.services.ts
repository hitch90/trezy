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
  get(id:string): Observable<object> {
    let categories$;
    categories$ = MeteorObservable.call('getCategory', id);
    return new Observable(observer => {
      categories$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
  getMain(): Observable<any> {
    let categories$;
    categories$ = MeteorObservable.call('getMainCategories');
    return new Observable(observer => {
      categories$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });
  }
  countSubcategories(parent: string):Observable<number> {
    let count, count$;
    count$ = MeteorObservable.call('getSubcategoriesCount', parent);
    return new Observable(observer => {
      count$.subscribe(data => {
        if (count) {
          observer.complete();
        }
        count = data;
        observer.next(count);
      });
    });
  }
}
