import {Component} from '@angular/core';
import {Sort} from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';

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
  emp: Employee[] = [
    {id: 1001, name: 'Rahul', salary: 9000, department: 'JAVA'},
    {id: 1002, name: 'Vikas', salary: 90000, department: 'ORRAPS'},
    {id: 1003, name: 'Uma', salary: 81000, department: 'JAVA'},
    {id: 1004, name: 'Sachin', salary: 21000, department: 'ORRAPS'},
    {id: 1005, name: 'Anmol', salary: 8000, department: '.NET'},
    {id: 1006, name: 'Vishal', salary: 12000, department: 'BI'},
    {id: 1007, name: 'Rajita', salary: 90000, department: 'BI'},
    {id: 1008, name: 'Neelima', salary: 95000, department: 'TESTING'},
    {id: 1009, name: 'Ajay', salary: 1000, department: 'TESTING'},
  ];
  sortedData: Employee[];

  constructor() {
    this.sortedData = this.emp.slice();
  }

  sortData(sort: Sort) {
    const data = this.emp.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id':
          return compare(a.id, b.id, isAsc);
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'salary':
          return compare(a.salary, b.salary, isAsc);
        case 'department':
          return compare(a.department, b.department, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
