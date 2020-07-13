import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: ` <h2> employee-list template </h2>
              <p *ngFor = "let employee of employees">
              {{employee.id}}  {{employee.Name}} 
              </p>
    `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) { }

  public employees = [];

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data)
  }

}
