import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { NavbarComponent } from './navbar/navbar.component';

const myroute:Routes=[
  {
    path:"",
    component:AddemployeeComponent
  },
  {
    path:"view",
    component:ViewemployeeComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
