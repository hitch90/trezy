import { NgModule } from '@angular/core';
import { ChannelComponent } from './channel/channel.component';
import { CommonModule } from '@angular/common';
import { FrontSharedModule } from '../shared/front-shared.module';
import {
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FrontSharedModule,
    MatIconModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [
    ChannelComponent,
    ProductsListComponent
  ],
  exports: [ChannelComponent],
  providers: []
})
export class ChannelModule {}
