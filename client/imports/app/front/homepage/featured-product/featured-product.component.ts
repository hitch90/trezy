import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';
import {
  CategoryService,
  ProducerService,
  ProductService
} from '../../../_core/_services';
import { Product } from '../../../../../../imports/models/product';
import { Producer } from '../../../../../../imports/models/producers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit, OnDestroy {
  category$: Subscription;
  product$: Subscription;
  producer$: Subscription;
  smallProducts$: Subscription;
  product: Product;
  category: Category;
  producer: Producer;
  smallProductsID = ['v2fr2dGKMSFA32k3g'];
  smallProducts: Product[] = [];
  isLoading = true;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private producerService: ProducerService
  ) {}

  ngOnInit() {
    this.product$ = this.productService
      .get('7cRjd8hWdTCDcun5W')
      .pipe(map(item => {
        this.categoryService.get(item.category).subscribe(data => {
          item.category_data = data;
        });
        this.producerService.get(item.producer).subscribe(data => {
          item.producer_data = data;
        });
        return item;
      }))
      .subscribe(data => {
        this.product = data;
        this.isLoading = false;
      });
    this.smallProducts$ = this.productService
        .get('v2fr2dGKMSFA32k3g')
        .pipe(map(item => {
          this.categoryService.get(item.category).subscribe(data => {
            item.category_data = data;
          });
          this.producerService.get(item.producer).subscribe(data => {
            item.producer_data = data;
          });
          return item;
        }))
        .subscribe(item => {
          this.smallProducts.push(item);
          this.smallProducts.push(item);
        });
  }
  ngOnDestroy() {}
}
