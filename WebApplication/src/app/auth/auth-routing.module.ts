import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth.module";


const routes: Routes = [

  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    AuthModule
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
