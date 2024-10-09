import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginComponent } from './views/login/login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
    FormLoginComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
