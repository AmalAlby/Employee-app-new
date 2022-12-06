import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {


  empcode=""
  empname=""
  designation=""
  salary=""
  mobilenumber=""
  companyname=""
  username=""
  password=""

  constructor(private api:ApiService){ }

  readvalue=()=>{

    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"companyname":this.companyname,"mobilenumber":this.mobilenumber,"username":this.username,"password":this.password}
    console.log(data)

    this.api.addEmp(data).subscribe(

      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Added Successfully")
          this.empcode=""
          this.empname=""
          this.designation=""
          this.salary=""
          this.mobilenumber=""
          this.companyname=""
          this.username=""
          this.password=""
        }
        else{
          alert("Something Went Wrong")
        }


      }

    )

  }

}
