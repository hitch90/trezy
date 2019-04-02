import { Component, OnInit } from '@angular/core';
import {MetaService} from "../../../_core/_services";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(
      private metaService: MetaService
  ) {}

  ngOnInit() {
    this.metaService.setPageTitle('Strona główna');

  }
}
