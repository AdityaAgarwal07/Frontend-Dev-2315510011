// Q2. Multi-Type Data Summary
// Demonstrates different data types and prints a formatted summary.

let name = "Aaryan";
let age = 21;
let isStudent = true;
let subjects = ["Math", "Physics", "CS"];
let profile = { city: "Agra", country: "India" };
let emptyValue = null;
let notDefined;

let dataSummary = [
  { label: "Name", value: name, type: typeof name },
  { label: "Age", value: age, type: typeof age },
  { label: "isStudent", value: isStudent, type: typeof isStudent },
  { label: "Subjects", value: subjects, type: Array.isArray(subjects) ? "array" : typeof subjects },
  { label: "Profile", value: JSON.stringify(profile), type: typeof profile },
  { label: "Empty Value", value: emptyValue, type: typeof emptyValue },
  { label: "Undefined", value: notDefined, type: typeof notDefined }
];

console.table(dataSummary);
