import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {CategoryService } from '../../../_core/_services';
import {Category} from "../../../../../../imports/models/categories";

@Component({
  selector: 'app-product-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  @Input() id: string;
  category: Category;
  category$: Subscription;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.category$ = this.categoryService.get(this.id).subscribe(data => {
      this.category = data;
    });
  }
  ngOnDestroy() {
    if (this.category$) {
      this.category$.unsubscribe();
    }
  }
}
