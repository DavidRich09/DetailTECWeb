import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {SharedModule} from "./shared/shared.module";

import { AppComponent } from './app.component';
import { Routes,RouterModule, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesComponent } from './pages/pages.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import {SharedModule} from "./shared/shared.module";
import { Pages2Component } from './pages2/pages2.component';
import {Shared2Module} from "./shared2/shared2.module";
import {Pages2RoutingModule} from "./pages2/pages2-routing.module";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    Pages2Component,


  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    PagesRoutingModule,
    SharedModule,
    Shared2Module,
    Pages2RoutingModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

