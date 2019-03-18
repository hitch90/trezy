import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {TestService} from '../../../_core/_services';
import { map } from 'rxjs/operators';
import {Test} from "../../../../../../imports/models/tests";

@Component({
  selector: 'app-tests-list',
  templateUrl: './tests-list.component.html',
  styleUrls: ['./tests-list.component.scss']
})
export class TestsListComponent implements OnInit, OnDestroy {
  tests: Test[] = [];
  tests$: Subscription;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.tests$ = this.testService
      .getNewest()
      .pipe(
        map(item => {
          return item;
        })
      )
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
