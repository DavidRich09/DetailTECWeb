import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule } from "../shared/shared.module";
import {PagesModule} from "./pages.module";
import {PagesComponent} from "./pages.component";
import {WorkersComponent} from "./workers/workers.component";
import {OfficeComponent} from "./office/office.component";
import {SupplierComponent} from "./supplier/supplier.component";
import {ProductsComponent} from "./products/products.component";
import {ServiceComponent} from "./service/service.component";
import {ClientComponent} from "./client/client.component";
import {AppointmentComponent} from "./appointment/appointment.component";

const routes: Routes = [
  {path : 'AdminView', component : PagesComponent, children : [
      {path : 'Workers', component : WorkersComponent},
      {path : 'Office', component : OfficeComponent},
      {path : 'Supplier', component : SupplierComponent},
      {path : 'Products', component : ProductsComponent},
      {path : 'Service', component : ServiceComponent},
      {path : 'Client', component : ClientComponent},
      {path : 'Appointment', component : AppointmentComponent},
    ]
  }
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
