import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private route:Router){}
  empid=""
  firstname=""
  lastname=""
  houseno=""
  streetname=""
  pincode=""
  district=""
  state=""
  country=""
  mobile=""
  email=""
  parentname=""
  gender=""
  degree=""
  experience=""
  doj=""
  username=""
  password=""
  cpassword=""


  readValues=()=>{
    if(this.password==this.cpassword){
      alert("Registered Successfully")
      this.route.navigate(["/employeelogin"])
    }else{
      alert("Password and confirm password not match")
    }
  }
}