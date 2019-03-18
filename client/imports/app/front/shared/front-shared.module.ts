import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [RouterModule, CommonModule, MatIconModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: []
})
export class FrontSharedModule {}
