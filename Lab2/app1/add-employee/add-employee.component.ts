import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmpService} from '../emp.service';
import {Employee} from '../Employee.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
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

  ngOnInit(): void {
  }

  onSubmit() {
    const id = this.idInputRef.nativeElement.value;
    const name = this.nameInputRef.nativeElement.value;
    const salary = this.salaryInputRef.nativeElement.value;
    const dept = this.deptInputRef.nativeElement.value;
    const newEmployee = new Employee(id, name, salary, dept);
    this.employeeService.addEmployee(newEmployee);
  }
}
