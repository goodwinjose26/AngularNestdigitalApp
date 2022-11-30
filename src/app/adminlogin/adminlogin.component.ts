import { Component } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username=""
  password=""

  adminLoginvalues =()=>
  {
    let data:any =
    {
      "username":this.username,"password":this.password
    }
    console.log(data)
    if (this.username =="admin" && this.password=="nestdigital") {
      alert("valid login")
      
    } else {
      alert("invalid credentials")
      
    }
  }

}
