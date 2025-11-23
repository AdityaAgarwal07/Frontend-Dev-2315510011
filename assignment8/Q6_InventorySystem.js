
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
  { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 20 },
  { id: 3, name: "Shoes", category: "Fashion", price: 2000, stock: 4 },
  { id: 4, name: "T-shirt", category: "Fashion", price: 800, stock: 15 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    if (!group[p.category]) group[p.category] = [];
    group[p.category].push(p);
    return group;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
