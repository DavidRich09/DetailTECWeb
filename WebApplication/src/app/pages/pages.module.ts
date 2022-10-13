import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { SharedModule } from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { WorkersComponent } from './workers/workers.component';
import { OfficeComponent } from './office/office.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ProductsComponent } from './products/products.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { AppointmentComponent } from './appointment/appointment.component';

@NgModule({
  declarations: [


    WorkersComponent,
    OfficeComponent,
    SupplierComponent,
    ProductsComponent,
    ServiceComponent,
    ClientComponent,
    AppointmentComponent
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
