import { NgModule } from '@angular/core';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AdminRoutingModule } from './admin-routing.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
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
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import {AdminCategoryFormComponent} from "./admin-categories/admin-category-form/admin-category-form.component";
import {AdminCategoryDialogComponent} from "./admin-categories/admin-category-dialog/admin-category-dialog.component";

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
    MatListModule,
    MatDialogModule
  ],
  declarations: [
    AdminHomepageComponent,
    AdminHeaderComponent,
    AdminChannelFormComponent,
    AdminChannelsComponent,
    AdminCategoriesComponent,
      AdminCategoryFormComponent,
      AdminCategoryDialogComponent
  ],
  entryComponents: [AdminCategoryFormComponent, AdminCategoryDialogComponent],
  providers: []
})
export class AdminModule {}
