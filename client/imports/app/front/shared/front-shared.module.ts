import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import {NavCategoriesListComponent} from "./categories-list/nav-categories-list.component";
import {FormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";

@NgModule({
  imports: [RouterModule, CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  declarations: [HeaderComponent, NavCategoriesListComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: []
})
export class FrontSharedModule {}
