import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface Employee {
  id: number;
  name: string;
  salary: number;
  department: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emp: Employee[] = [{id: 1001, name: 'Rajesh', salary: 90000, department: 'IT'},
    {id: 1002, name: 'Bob', salary: 120000, department: 'BU'}];

  addEmployeeForm: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    department: new FormControl('', [Validators.required]),
  });
  addEmployee() {
      this.emp.push({
      id: this.addEmployeeForm.value.id,
      name: this.addEmployeeForm.value.name,
      salary: this.addEmployeeForm.value.salary,
      department: this.addEmployeeForm.value.department
    });
      console.log(this.emp);
      this.addEmployeeForm.reset();
  }
}
