import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor() { }

  employeeCode=""

  readValues=()=>{
    let data={
      "employeeCode":this.employeeCode
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
