import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule, MatRadioModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { AdminChannelFormComponent } from './admin-channel-form/admin-channel-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from './shared/admin-shared.module';
import { AdminChannelsComponent } from './admin-channels/admin-channels.component';
import { AdminCategoriesComponent } from './admin-categories/admin-categories.component';
import { AdminCategoryFormComponent } from './admin-categories/admin-category-form/admin-category-form.component';
import { AdminCategoryDialogComponent } from './admin-categories/admin-category-dialog/admin-category-dialog.component';
import { AdminProductFormComponent } from './admin-product-form/admin-product-form.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProducerDialogComponent } from './admin-producers/admin-producer-dialog/admin-producer-dialog.component';
import { AdminProducerFormComponent } from './admin-producers/admin-producer-form/admin-producer-form.component';
import { AdminProducersComponent } from './admin-producers/admin-producers.component';
import { AdminAttributesComponent } from './admin-attributes/admin-attributes.component';
import { AdminAttributeFormComponent } from './admin-attributes/admin-attribute-form/admin-attribute-form.component';
import { AdminAttributeDialogComponent } from './admin-attributes/admin-attribute-dialog/admin-attribute-dialog.component';
import { AdminProductFormAttributesComponent } from './admin-product-form/admin-product-form-attributes/admin-product-form-attributes.component';
import { AdminHomepageModule } from './admin-homepage/admin-homepage.module';
import {AdminTestsComponent} from "./admin-tests/admin-tests.component";
import {AdminTestsFormComponent} from "./admin-tests-form/admin-tests-form.component";
import {AdminEditFormModule} from "./admin-edit-form/admin-edit-form.module";

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
    MatDialogModule,
      MatRadioModule,
    AdminHomepageModule,
      AdminEditFormModule
  ],
  declarations: [
    AdminChannelFormComponent,
    AdminChannelsComponent,
    AdminCategoriesComponent,
    AdminCategoryFormComponent,
    AdminCategoryDialogComponent,
    AdminProductFormComponent,
    AdminProductsComponent,
    AdminProducersComponent,
    AdminProducerDialogComponent,
    AdminProducerFormComponent,
    AdminAttributesComponent,
    AdminAttributeFormComponent,
    AdminAttributeDialogComponent,
    AdminProductFormAttributesComponent,
      AdminTestsComponent,
      AdminTestsFormComponent
  ],
  entryComponents: [
    AdminCategoryFormComponent,
    AdminCategoryDialogComponent,
    AdminProducerDialogComponent,
    AdminProducerFormComponent,
    AdminAttributesComponent,
    AdminAttributeFormComponent,
    AdminAttributeDialogComponent
  ],
  exports: [],
  providers: []
})
export class AdminModule {}
