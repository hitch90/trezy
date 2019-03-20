import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ChannelService} from '../../../_core/_services';
import {map} from "rxjs/operators";
import {Channel} from "../../../../../../imports/models/channels";

@Component({
  selector: 'app-homepage-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class HomepageChannelListComponent implements OnInit, OnDestroy {
  channels: Channel[] = [];
  channels$: Subscription;
  categoryCount;

  constructor( private channelService: ChannelService) {}

  ngOnInit() {
    this.channels$ = this.channelService
        .getAll()
        .pipe(
            map(item => {
              // this.producerService.countProducts(item._id).subscribe(data => {
              //   item['count'] = data;
              // });
              return item;
            })
        )
        .subscribe(data => {
          this.channels.push(data);
        });
  }
  ngOnDestroy() {
    if (this.channels$) {
      this.channels$.unsubscribe();
    }
  }
}
