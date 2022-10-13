import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

  employeeCode=""
  employeeName=""
  desigination=""
  gender=""
  companyName=""
  salary=""
  address=""
  mobileno=""
  email=""
  year=""
  bloodgroup=""
  dob=""


  readValues=()=>{
    let data={
      "employeeCode":this.employeeCode,
  "employeeName":this.employeeName,
  "desigination":this.desigination,
  "gender":this.gender,
  "companyName":this.companyName,
  "salary":this.salary,
  "address":this.address,
 "mobileno":this.mobileno,
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
