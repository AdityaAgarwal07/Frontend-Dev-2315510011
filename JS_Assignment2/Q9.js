
// Q9. Odd–Even Number Analyzer
let numbers = [];
let results = [];

for (let i = 1; i <= 30; i++) {
  numbers.push(i);
  if (i % 3 === 0 && i % 5 === 0) results.push("FizzBuzz");
  else if (i % 2 === 0) results.push("Even");
  else results.push("Odd");
}

console.log(results);
