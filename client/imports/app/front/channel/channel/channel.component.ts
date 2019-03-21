import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService, ProductService } from '../../../_core/_services';
import { Channel } from '../../../../../../imports/models/channels';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit, OnDestroy {
  channel: Channel;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private channelService: ChannelService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.channel = null;
      this.get(params.id);
    });
  }
  ngOnDestroy(): void {}

  get(id) {
    this.channelService.get(id).subscribe(data => {
      this.channel = data;
    });
  }
}
