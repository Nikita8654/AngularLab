export class Employee {
  public id: number;
  public name: string;
  public salary: number;
  public department: string;

  constructor(id: number, name: string, salary: number, department: string) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.department = department;
  }
}
