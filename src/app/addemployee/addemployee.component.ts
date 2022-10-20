import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

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
  }


  ngOnInit(): void {
  }

}
