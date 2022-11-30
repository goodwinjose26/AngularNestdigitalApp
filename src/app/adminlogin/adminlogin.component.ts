import { Component } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""
  constructor(private route:Routes){}
  adminLoginvalues =()=>
  {
    let data:any =
    {
      "username":this.username,"password":this.password
    }
    console.log(data)
    if (this.username =="admin" && this.password=="nestdigital") {
  
this.route.navigate(["/viewcourse"])      

    } else {
      alert("invalid credentials")
      
    }
  }

}
