import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {Shared2Module} from "../shared2/shared2.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    SharedModule,
    Shared2Module,
    FormsModule,
    HttpClientModule,
  ],
  exports: [

  ]
})
export class Pages2Module { }
