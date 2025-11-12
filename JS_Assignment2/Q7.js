
// Q7. Customer Feedback Processor
let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.split(" ").length;
let isNegative = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

console.log(`Word Count: ${words}`);
console.log(isNegative ? "Needs Improvement" : "Positive Feedback");
