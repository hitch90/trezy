import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProducerService } from '../../../_core/_services';
import { Producer } from '../../../../../../imports/models/producers';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit, OnDestroy {
  producer: Producer;
  constructor(
    private route: ActivatedRoute,
    private producerService: ProducerService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.producer = null;
      this.get(params.id);
    });
  }
  ngOnDestroy(): void {}

  get(id) {
    this.producerService.get(id).subscribe(data => {
      this.producer = data;
    });
  }
}
