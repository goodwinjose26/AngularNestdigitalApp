import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RouterModule, Routes } from '@angular/router';
const myRoute:Routes=[
  {
    path:"",
    component:HomecontentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    HomecontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
