import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChannelComponent} from "./channel/channel.component";

const routes: Routes = [
  {
    path: 'channel/:id',
    component: ChannelComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelRoutingModule {}
