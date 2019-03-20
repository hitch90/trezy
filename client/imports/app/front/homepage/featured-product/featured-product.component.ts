import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from '../../../../../../imports/models/categories';
import {
    CategoryService,
    ProducerService,
    ProductService, TestService
} from '../../../_core/_services';
import { Product } from '../../../../../../imports/models/product';
import { Producer } from '../../../../../../imports/models/producers';
import { map } from 'rxjs/operators';
import {PersonalizationService} from "../../../_core/_services/personalization.services";

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit, OnDestroy {
    personalization$: Subscription;
  product$: Subscription;
  producer$: Subscription;
  smallProducts$: Subscription;
  product: Product;
  category: Category;
  producer: Producer;
  smallProducts: Product[] = [];
  isLoading = true;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private producerService: ProducerService,
    private personalizationService: PersonalizationService,
    private testService: TestService
  ) {}

  ngOnInit() {
      this.personalization$ = this.personalizationService.get('homepage').subscribe(data => {
          this.getProducts(data['product_big'], data['product_small_top'], data['product_small_bottom']);
      });

  }
  ngOnDestroy() {
      if (this.personalization$) {
          this.personalization$.unsubscribe();
      }
      if (this.product$) {
          this.product$.unsubscribe();
      }
      if (this.smallProducts$) {
          this.smallProducts$.unsubscribe();
      }
  }
  getProducts(prdB, prdST, prdSB) {
      this.product$ = this.productService
          .get(prdB)
          .pipe(map(item => {
              this.categoryService.get(item.category).subscribe(data => {
                  item.category_data = data;
              });
              this.producerService.get(item.producer).subscribe(data => {
                  item.producer_data = data;
              });
              this.testService
                  .count(item._id)
                  .subscribe(data => (item['count'] = data));
              return item;
          }))
          .subscribe(data => {
              this.product = data;
              this.isLoading = false;
          });
      this.smallProducts$ = this.productService
          .get(prdST)
          .pipe(map(item => {
              this.categoryService.get(item.category).subscribe(data => {
                  item.category_data = data;
              });
              this.producerService.get(item.producer).subscribe(data => {
                  item.producer_data = data;
              });
              this.testService
                  .count(item._id)
                  .subscribe(data => (item['count'] = data));
              return item;
          }))
          .subscribe(item => {
              this.smallProducts.push(item);
          });
      this.smallProducts$ = this.productService
          .get(prdSB)
          .pipe(map(item => {
              this.categoryService.get(item.category).subscribe(data => {
                  item.category_data = data;
              });
              this.producerService.get(item.producer).subscribe(data => {
                  item.producer_data = data;
              });
              this.testService
                  .count(item._id)
                  .subscribe(data => (item['count'] = data));
              return item;
          }))
          .subscribe(item => {
              this.smallProducts.push(item);
          });
  }
}
