import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedModule } from '../shared/admin-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule} from '@angular/material';
import {AdminEditFormComponent} from "./admin-edit-form/admin-edit-form.component";

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
  declarations: [AdminEditFormComponent],
  exports: [AdminEditFormComponent],
  providers: []
})
export class AdminEditFormModule {}
