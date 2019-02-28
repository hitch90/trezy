import { NgModule } from '@angular/core';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminRoutingModule } from './admin-routing.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminChannelFormComponent } from './admin-channel-form/admin-channel-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from './shared/admin-shared.module';
import { AdminChannelsComponent } from './admin-channels/admin-channels.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminSharedModule,
    MatSelectModule,
    MatMenuModule,
      MatListModule
  ],
  declarations: [
    AdminHomepageComponent,
    AdminHeaderComponent,
    AdminChannelFormComponent,
    AdminChannelsComponent
  ],
  providers: []
})
export class AdminModule {}
