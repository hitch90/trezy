import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProducerService} from '../../../_core/_services';
import {Producer} from "../../../../../../imports/models/producers";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-producer-list',
  templateUrl: './producer-list.component.html',
  styleUrls: ['./producer-list.component.scss']
})
export class ProducerListComponent implements OnInit, OnDestroy {
  producers: Producer[] = [];
  producers$: Subscription;
  categoryCount;

  constructor(private producerService: ProducerService) {}

  ngOnInit() {
    this.producers$ = this.producerService
        .getAll()
        .pipe(
            map(item => {
              // this.producerService.countSubcategories(item._id).subscribe(data => {
              //   item['count'] = data;
              // });
              return item;
            })
        )
        .subscribe(data => {
          this.producers.push(data);
        });
  }
  ngOnDestroy() {
    if (this.producers$) {
      this.producers$.unsubscribe();
    }
  }
}
