import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './homenavbar/homenavbar.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';
import { EmployeeloginComponent } from './employeelogin/employeelogin.component';
import { EmployeenavbarComponent } from './employeenavbar/employeenavbar.component';
import { AddcourseComponent } from './addcourse/addcourse.component'
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
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"adminlogin",
    component:AdminloginComponent
  },
  {
    path:"viewcourse",
    component:ViewcourseComponent
  },
  {
    path:"viewfriend",
    component:ViewfriendComponent
  },
  {
    path:"employeelogin",
    component:EmployeeloginComponent
  },
  {
    path:"addcourse",
    component:AddcourseComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomenavbarComponent,
    HomecontentComponent,
    ContactusComponent,
    AboutusComponent,
    GalleryComponent,
    AdminloginComponent,
    AdminnavbarComponent,
    ViewcourseComponent,
    ViewfriendComponent,
    EmployeeloginComponent,
    EmployeenavbarComponent,
    AddcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
