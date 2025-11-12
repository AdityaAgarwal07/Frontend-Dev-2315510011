// Q3. Monthly Expense Tracker
// Calculates total and average expenses including tax.

let expenses = [1200, 800, 5000, 1500, 700]; // food, travel, rent, bills, leisure
let total = expenses.reduce((sum, val) => sum + val, 0);
let avg = total / expenses.length;
let tax = total * 0.10;
let finalAmount = total + tax;

console.log(`Total: ₹${total.toFixed(2)}`);
console.log(`Average: ₹${avg.toFixed(2)}`);
console.log(`Final after tax: ₹${finalAmount.toFixed(2)}`);
