import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';
import {
  CategoryService,
  ProductService,
  TestService
} from '../../../_core/_services';
import { map } from 'rxjs/operators';
import { Product } from '../../../../../../imports/models/product';

@Component({
  selector: 'app-homepage-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  products$: Subscription;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.products$ = this.productService
      .getNewest()
      .pipe(
        map(item => {
          this.testService
            .count(item._id)
            .subscribe(data => (item['count'] = data));
          return item;
        })
      )
      .subscribe(data => {
        this.products.push(data);
      });
  }
  ngOnDestroy() {
    if (this.products$) {
      this.products$.unsubscribe();
    }
  }
}
