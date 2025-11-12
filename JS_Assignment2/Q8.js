
// Q8. Dynamic Discount Evaluator
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

let total = 0;

cart.forEach(product => {
  let discount = 0;
  if (product.category === "electronics") discount = 0.10;
  else if (product.category === "fashion") discount = 0.05;
  product.price -= product.price * discount;
  total += product.price;
});

if (total > 50000) total -= total * 0.05;

console.log(`Final Total: ₹${total.toFixed(2)}`);
