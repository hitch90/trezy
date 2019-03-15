import { NgModule } from '@angular/core';
import { FrontRoutingModule } from './front-routing.module';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';
import {ProductRoutingModule} from "./product/product-routing.module";
import {ProductModule} from "./product/product.module";

@NgModule({
  imports: [
    FrontRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    HomepageModule,
      ProductModule,
    ProductRoutingModule
  ],
  declarations: [],
  entryComponents: [],
  providers: []
})
export class FrontModule {}
