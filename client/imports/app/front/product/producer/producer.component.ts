import { Component, Input, OnInit } from '@angular/core';
import { Producer } from '../../../../../../imports/models/producers';
import { Subscription } from 'rxjs';
import { ProducerService } from '../../../_core/_services';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProductProducerComponent implements OnInit {
  @Input() id: string;
  producer: Producer;
  producer$: Subscription;

  constructor(private producerService: ProducerService) {}

  ngOnInit() {
    this.producer$ = this.producerService.get(this.id).subscribe(data => {
      this.producer = data;
    });
  }
  ngOnDestroy() {
    if (this.producer$) {
      this.producer$.unsubscribe();
    }
  }
}
