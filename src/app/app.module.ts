import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomecontentComponent
  },
  {
    path:"contactus",
    component:ContactusComponent
  },
  {
    path:"aboutus",
    component:AboutusComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    HomecontentComponent,
    ContactusComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
