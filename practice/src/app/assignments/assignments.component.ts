import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  uname = "d";
  buttonclk = true;

  checkuname(){
    if(this.uname != "")
    return this.buttonclk = false;
    else return this.buttonclk = true;
  }

}
