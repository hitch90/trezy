import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import { Product } from '../../../../../imports/models/product';
import { Products } from '../../../../../imports/collections/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Observable<Product[]>;
  productsListSubscription: Subscription;
  ngOnInit() {
    this.productsListSubscription = MeteorObservable.subscribe(
      'productsList'
    ).subscribe(() => {
      this.products = Products.find();
    });
  }
  ngOnDestroy() {
    if (this.productsListSubscription) {
      this.productsListSubscription.unsubscribe();
    }
  }
  removeProduct (_id: string) {
    Meteor.call('removeProduct', _id);
  }
}
