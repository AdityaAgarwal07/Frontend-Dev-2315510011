// Q4. Academic Performance Evaluator
// Determines student promotion status based on marks.

let marks = [90, 85, 88, 92, 80]; // Marks of 5 subjects

if (marks.some(m => m < 35)) {
  console.log("Detained due to low marks.");
} else {
  let total = marks.reduce((a, b) => a + b, 0);
  let avg = total / marks.length;

  if (avg >= 85) console.log("Promoted with Distinction");
  else if (avg >= 50) console.log("Promoted");
  else console.log("Detained");
}
