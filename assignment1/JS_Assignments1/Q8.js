// Q8. Employee Salary Projection

let currentSalary = 50000;
let incrementRate = 10; // 10%
let salaries = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += currentSalary * (incrementRate / 100);
  salaries.push({ Year: year, Salary: Math.round(currentSalary) });
}

console.table(salaries);
