import {Component, ElementRef, ViewChild} from '@angular/core';
import {EmpService} from './emp.service';
import {Employee} from './Employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: number;
  name: string;
  salary: number;
  dept: string;
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('salaryInput') salaryInputRef: ElementRef;
  @ViewChild('deptInput') deptInputRef: ElementRef;

  constructor(private employeeService: EmpService) {
  }

  onSubmit() {
    alert(this.name + ' ' + this.id + ' ' + this.salary + ' ' + this.dept);
    const id = this.idInputRef.nativeElement.value;
    const name = this.nameInputRef.nativeElement.value;
    const salary = this.salaryInputRef.nativeElement.value;
    const dept = this.deptInputRef.nativeElement.value;
    const newEmployee = new Employee(id, name, salary, dept);
    this.employeeService.addEmployee(newEmployee);
  }
}
