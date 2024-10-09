import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // o RouterModule.forChild(routes) si es un módulo de características
  exports: [RouterModule]
})
export class LoginRoutingModule { }