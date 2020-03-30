import {Component, ComponentFactoryResolver, EventEmitter, OnInit, Output, ViewChild, ViewContainerRef} from '@angular/core';
import {EmpService} from '../emp.service';
import {Employee} from '../Employee.model';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {
  Employee: Employee[] = [];
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  constructor(private employeeService: EmpService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this.Employee = this.employeeService.getEmployees();
  }

  onDelete(index: number) {
    this.employeeService.deleteEmployee(index);
  }

  /* onUpdate(index: number) {
     const emp: Employee = this.employeeService.updateEmployee(index);
     return emp;
   }*/
  onUpdate(index: number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(UpdateEmployeeComponent);
    const componentRef = this.container.createComponent(componentFactory);
    componentRef.instance.i = index;
  }
}
