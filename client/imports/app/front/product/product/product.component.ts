import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../../../../imports/models/product";
import {ProductService} from "../../../_core/_services";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(
      private route: ActivatedRoute,
      private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.get(params.id);
    });
  }
  get(id) {
    this.productService.get(id).subscribe(data => {
      console.log(data);
      this.product = data;
    })
  }
}
