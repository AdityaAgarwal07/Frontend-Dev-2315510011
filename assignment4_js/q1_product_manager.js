// Q1: E-Commerce Product Manager (Classes + Objects)
// Save as: q1_product_manager.js
// Node / Browser console compatible

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        if (percent <= 0 || percent >= 100) return;
        this.price = +(this.price * (1 - percent / 100)).toFixed(2);
    }

    details() {
        return `Product(${this.id}): ${this.name} — ₹${this.price} [${this.category}]`;
    }
}

// Demo usage
const products = [
    new Product(1, 'Laptop Pro', 1500, 'Electronics'),
    new Product(2, 'Headphones', 850, 'Electronics'),
    new Product(3, 'Office Chair', 1200, 'Furniture'),
    new Product(4, 'Coffee Mug', 250, 'Home'),
];

console.log('All products:');
products.forEach(p => console.log(p.details()));

// Apply 10% discount to product 1
products[0].applyDiscount(10);
console.log('\nAfter 10% discount on product 1:');
console.log(products[0].details());

// Display products with price > 1000
const expensive = products.filter(p => p.price > 1000);
console.log('\nProducts with price > 1000:');
expensive.forEach(p => console.log(p.details()));

// Export for Node usage
if (typeof module !== 'undefined') module.exports = { Product, products };
