import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  appname = "Akshay";
  toggleprop = false;
  togglevalue = "unchanged"

  testbinding = ""

  toggleclick()
  {
    this.togglevalue="changed"
  }

  constructor() {

    setTimeout(() => {
      this.toggleprop=true;
    }, 2000 );
  
   }

  ngOnInit(): void {
  }

}
