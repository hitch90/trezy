import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {
  CategoryService,
  ProductService,
  TestService
} from '../../../_core/_services';
import {Test} from "../../../../../../imports/models/tests";

@Component({
  selector: 'app-category-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  @Input() channel: string;
  tests: Test[] = [];
  products$: Subscription;
  testName: string = '';
  filterTests: Test[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.products$ = this.testService
      .getForChannel(this.channel)
      .subscribe(data => {
        this.tests.push(data);
        this.search();
      });
  }
  ngOnDestroy() {
    if (this.products$) {
      this.products$.unsubscribe();
    }
  }
  search() {
    this.filterTests = this.tests.filter(item => {
      return item.name.toLowerCase().includes(this.testName.toLowerCase());
    })
  }
}
