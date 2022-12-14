import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes } from "@angular/router";
import {Pages2Module} from "./pages2.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppointmentComponent} from "./appointment/appointment.component";
import {Pages2Component} from "./pages2.component";
import {ClientPointsComponent} from "./client-points/client-points.component";

const routes: Routes = [
  {path : 'ClientView', component : Pages2Component, children : [
      {path : 'Appointment', component : AppointmentComponent},
      {path : 'ClientPoints', component : ClientPointsComponent},
    ]}

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
