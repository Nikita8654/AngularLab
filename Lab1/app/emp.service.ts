import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {Employee} from './Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  private employee: Employee[] = [
    new Employee(1001, 'Rahul', 9000, 'java'),
    new Employee(1002, 'Vikas', 90000, 'Oracle')
  ];

  getEmployees() {
    return this.employee.slice();
  }

  addEmployee(emp) {
    this.employee.push(emp);
    console.log(this.employee);
  }

}
