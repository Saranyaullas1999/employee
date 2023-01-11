import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  code=""
  name=""
  designation=""
  gender=""
  companyname=""
  salary=""
  address=""
  mobile=""
  email=""
  year=""
  bloodgroup=""
  dob=""


  readValues=()=>{
    let data={
      "code":this.code,
  "name":this.name,
  "designation":this.designation,
  "gender":this.gender,
  "companyname":this.companyname,
  "salary":this.salary,
  "address":this.address,
 "mobile":this.mobile,
  "email":this.email,
  "year":this.year,
  "bloodgroup":this.bloodgroup,
  "dob":this.dob
    }
    console.log(data)
    this.myapi.addEmployee(data).subscribe(
      (res)=>{
        alert("Successfully added")
      }
    )
    this.code=""
    this.name=""
    this.designation=""
    this.gender=""
    this.companyname=""
    this.salary=""
    this.address=""
    this.mobile=""
    this.email=""
    this.year=""
    this.bloodgroup=""
    this.dob=""
  }


  ngOnInit(): void {
  }

}
