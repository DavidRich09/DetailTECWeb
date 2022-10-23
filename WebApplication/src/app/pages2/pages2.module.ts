import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {Shared2Module} from "../shared2/shared2.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppointmentComponent } from './appointment/appointment.component';
import { ClientPointsComponent } from './client-points/client-points.component';



@NgModule({
  declarations: [
    AppointmentComponent,
    ClientPointsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Shared2Module,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    AppointmentComponent,
    ClientPointsComponent
  ]
})
export class Pages2Module { }
