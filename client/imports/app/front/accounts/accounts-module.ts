import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from "./annotations";
import {LoginComponent} from "./login/login.component";
import {FrontSharedModule} from "../shared/front-shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      FrontSharedModule
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
