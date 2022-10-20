import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'

const appRoutes : Routes=[
  {
    path:"",component:AddemployeeComponent
  },
  {
    path:"search",component:SearchemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    NavbarComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
