import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TestService } from '../../../_core/_services';

@Component({
  selector: 'app-product-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class ProductTestsListComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() type: string;
  tests = [];
  tests$: Subscription;

  constructor(private testsService: TestService) {}

  ngOnInit() {
    this.tests$ = this.testsService
      .getForProduct(this.id, this.type)
      .subscribe(data => {
        this.tests.push(data);
      });
  }
  ngOnDestroy() {
    if (this.tests$) {
      this.tests$.unsubscribe();
    }
  }
}
