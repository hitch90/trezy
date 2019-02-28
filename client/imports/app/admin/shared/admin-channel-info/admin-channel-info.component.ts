import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-channel-info',
  templateUrl: './admin-channel-info.component.html',
  styleUrls: ['./admin-channel-info.component.scss']
})
export class AdminChannelInfoComponent implements OnInit {
  @Input() item:object;
  @Output() onClick: EventEmitter<void> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  click(event) {
    this.onClick.emit(event);
  }

}
