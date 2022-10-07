import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [

  ],
  exports: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
