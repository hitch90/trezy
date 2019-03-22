import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../../../imports/models/product';
import { ProductService } from '../../../_core/_services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  tabs = [
    {
      name: 'Testy i recenzje',
      id: 'tests',
      isVisible: true
    }
  ];
  activeTab = 'tests';
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
      this.product = data;
      this.generateTab();
    });
  }
  generateTab() {
    if (this.product && this.product.attributes && this.product.attributes.length) {
      this.tabs.push({
        name: 'Specyfikacja techniczna',
        id: 'spec',
        isVisible: true
      });
    }
  }
}
