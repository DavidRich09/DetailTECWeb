import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from "@angular/router";
import {Pages2Module} from "./pages2.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

const routes: Routes = [

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Pages2Module,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule]
})

export class Pages2RoutingModule { }
