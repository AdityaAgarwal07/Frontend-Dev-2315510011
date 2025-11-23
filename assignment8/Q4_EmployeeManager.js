
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  work() {
    console.log(`${this.name} works in ${this.department}`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`${this.name} manages the ${this.department} department`);
  }
}

const e = new Employee("Aaryan", "IT");
const m = new Manager("Riya", "Development");

e.work();
m.work();
