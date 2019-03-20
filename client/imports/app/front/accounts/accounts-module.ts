import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from "./annotations";
import {LoginComponent} from "./login/login.component";
import {FrontSharedModule} from "../shared/front-shared.module";
import {MatFormFieldModule, MatInputModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      FrontSharedModule,
      MatInputModule,
      MatFormFieldModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    AuthGuard
  ],
  exports: [
    LoginComponent
  ]
})
export class AccountsModule {
}
