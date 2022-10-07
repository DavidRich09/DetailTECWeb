import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import {PagesModule} from "./pages.module";

const routes: Routes = [

];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
    SharedModule,
    PagesModule

  ],
  exports: [RouterModule,
    ]
})
export class PagesRoutingModule { }
