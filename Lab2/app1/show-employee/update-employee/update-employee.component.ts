import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Employee} from '../../Employee.model';
import {EmpService} from '../../emp.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  updateForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
  });
  @Input() i: number;
  Employee: Employee[] = [];
  updatedIndex: number;

  constructor(private employeeService: EmpService) {
  }

  ngOnInit(): void {
    this.Employee = this.employeeService.getEmployees();
    const employee: Employee = this.Employee[this.i];
    console.log({...employee});
    this.updatedIndex = this.i;
    this.updateForm.setValue({...employee});
    this.updateForm.clearValidators();
  }

  onUpdate() {
    const emp: Employee = this.Employee[this.updatedIndex] = {
      id: this.updateForm.value.id,
      name: this.updateForm.value.name,
      salary: this.updateForm.value.salary,
      department: this.updateForm.value.department
    };
    console.log(emp);
    this.employeeService.updateEmployee(this.updatedIndex, emp);
 }
}
