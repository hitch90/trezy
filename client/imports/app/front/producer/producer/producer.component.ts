import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MetaService, ProducerService} from '../../../_core/_services';
import { Producer } from '../../../../../../imports/models/producers';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.scss']
})
export class ProducerComponent implements OnInit, OnDestroy {
  producer: Producer;
  constructor(
    private route: ActivatedRoute,
    private producerService: ProducerService,
    private metaService: MetaService,
    @Inject(DOCUMENT) private dom
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.producer = null;
      this.get(params.id);
    });
    this.metaService.createCanonicalURL(this.dom.URL);
  }
  ngOnDestroy(): void {}

  get(id) {
    this.producerService.get(id).subscribe(data => {
      this.producer = data;
      this.metaService.setPageTitle(this.producer.name);
    });
  }
}
