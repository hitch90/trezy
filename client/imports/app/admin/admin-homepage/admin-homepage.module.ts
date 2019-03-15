import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../shared/admin-shared.module';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { PersonalizationComponent } from './personalization/personalization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AdminSharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [AdminHomepageComponent, PersonalizationComponent],
  exports: [AdminHomepageComponent],
  providers: []
})
export class AdminHomepageModule {}
