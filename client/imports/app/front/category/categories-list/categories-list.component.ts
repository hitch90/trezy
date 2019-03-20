import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  @Input() items: object[];
  constructor() {}

  ngOnInit() {

  }
  ngOnDestroy() {
  }
}
