import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TrimDirective } from '../../_core/_directives';
import { AdminChannelInfoComponent } from './admin-channel-info/admin-channel-info.component';
import {
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import { AdminHeaderComponent } from './admin-header/admin-header.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  declarations: [
    AdminChannelInfoComponent,
    TrimDirective,
    AdminHeaderComponent
  ],
  exports: [AdminChannelInfoComponent, TrimDirective, AdminHeaderComponent],
  providers: []
})
export class AdminSharedModule {}
