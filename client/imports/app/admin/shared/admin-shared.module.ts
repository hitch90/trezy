import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TrimDirective} from "../../_core/_directives";
import {AdminChannelInfoComponent} from "./admin-channel-info/admin-channel-info.component";
import {MatIconModule} from "@angular/material";

@NgModule({
  imports: [RouterModule, CommonModule, MatIconModule],
  declarations: [AdminChannelInfoComponent, TrimDirective],
  exports: [AdminChannelInfoComponent,  TrimDirective],
  providers: []
})
export class AdminSharedModule {}
