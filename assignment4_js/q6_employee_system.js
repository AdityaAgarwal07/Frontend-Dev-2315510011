// Q6: Employee Management System (Classes + Object Methods)
// Save as: q6_employee_system.js

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) return;
        this.salary = +(this.salary * (1 + percent / 100)).toFixed(2);
    }
}

// Create 5 employees
const emps = [
    new Employee(1, 'Alice', 'Engineering', 5000),
    new Employee(2, 'Bob', 'Sales', 4000),
    new Employee(3, 'Carol', 'HR', 3500),
    new Employee(4, 'Dave', 'Marketing', 4200),
    new Employee(5, 'Eve', 'Support', 3000),
];

// Apply a 10% bonus to everyone
emps.forEach(e => e.applyBonus(10));

// Log annual salary for each
emps.forEach(e => console.log(`${e.name}: Annual = ₹${e.getAnnualSalary()}`));

// Total annual payout using reduce
const totalAnnual = emps.reduce((sum, e) => sum + e.getAnnualSalary(), 0);
console.log('\nTotal Annual Payout = ₹' + totalAnnual);

if (typeof module !== 'undefined') module.exports = { Employee, emps };
