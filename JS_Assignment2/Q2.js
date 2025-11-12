
// Q2. String Manipulation Report
let productName = " wireless headphones PRO ";
let cleaned = productName.trim().toLowerCase().split(" ").filter(Boolean).map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
cleaned = cleaned.replace("Pro", "Pro Edition");
console.log(`Cleaned Title: ${cleaned}`);
console.log(`Length: ${cleaned.length}`);
