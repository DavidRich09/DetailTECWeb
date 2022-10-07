import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Sidebar2Component} from "./sidebar2/sidebar2.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [Sidebar2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [Sidebar2Component]
})
export class Shared2Module { }
