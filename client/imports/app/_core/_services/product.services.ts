import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeteorObservable } from 'meteor-rxjs';
import { Product } from '../../../../../imports/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  add(product: Product): Observable<any> {
    return MeteorObservable.call('addProduct', product);
  }
  get(id: string): Observable<any> {
    let product$;
    product$ = MeteorObservable.call('getProduct', id);
    return new Observable(observer => {
      product$.subscribe(data => {
        observer.next(data);
        observer.complete();
      });
    });
  }
  update(product: Product): Observable<any> {
    return MeteorObservable.call('updateProduct', product);
  }
  updateAttrs(attributes, id): Observable<any> {
    return MeteorObservable.call('updateProductAttributes', attributes, id);

  }
  getAll(): Observable<any> {
    return MeteorObservable.call('getAllProducts');
  }
  remove(id: string): Observable<any> {
    return MeteorObservable.call('removeCategory', id);
  }
  getNewest():Observable<Product> {
    let products$;
    products$ = MeteorObservable.call('getNewestProducts');
    return new Observable(observer => {
      products$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });

  }
  getByCategory(category):Observable<Product> {
    let products$;
    products$ = MeteorObservable.call('getByCategoryProducts', category);
    return new Observable(observer => {
      products$.subscribe(data => {
        for (let item of data) {
          observer.next(item);
        }
        observer.complete();
      });
    });

  }
}
