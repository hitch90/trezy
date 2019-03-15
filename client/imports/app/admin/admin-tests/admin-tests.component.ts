import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';

import { Meteor } from 'meteor/meteor';
import { MeteorObservable } from 'meteor-rxjs';
import {Test} from "../../../../../imports/models/tests";
import {Tests} from "../../../../../imports/collections/tests";

@Component({
  selector: 'app-admin-tests',
  templateUrl: './admin-tests.component.html',
  styleUrls: ['./admin-tests.component.scss']
})
export class AdminTestsComponent implements OnInit, OnDestroy {
  tests: Observable<Test[]>;
  tests$: Subscription;
  ngOnInit() {
    this.tests$ = MeteorObservable.subscribe('testsList').subscribe(() => {
      this.tests = Tests.find();
    });
  }
  ngOnDestroy() {
    if (this.tests$) {
      this.tests$.unsubscribe();
    }
  }
  removeTest(_id: string) {
    Meteor.call('removeTest', _id);
  }
}
