import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';
import {CategoryService, ProductService} from '../../../_core/_services';
import { map } from 'rxjs/operators';
import {Product} from "../../../../../../imports/models/product";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  products$: Subscription;

  constructor(private categoryService: CategoryService, private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService
      .getNewest()
      .pipe(
        map(item => {
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
