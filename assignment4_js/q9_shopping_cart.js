// Q9: Shopping Cart Total (Classes + RegExp for Coupon)
// Save as: q9_shopping_cart.js

class CartItem {
    constructor(name, price, quantity=1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotal() { return this.price * this.quantity; }
}

class Cart {
    constructor() { this.items = []; this.coupon = null; }
    addItem(item) { this.items.push(item); }
    getTotal() {
        return this.items.reduce((sum, it) => sum + it.getTotal(), 0);
    }
    applyCoupon(code) {
        // coupon format SAVE20 or DISC10
        const m = /^(SAVE|DISC)(\d{1,2})$/.exec(code);
        if (!m) return { success: false, message: 'Invalid coupon format' };
        const percent = Number(m[2]);
        this.coupon = { code, percent };
        return { success: true, percent };
    }
    getFinalTotal() {
        const total = this.getTotal();
        if (!this.coupon) return total;
        const disc = total * (this.coupon.percent / 100);
        return +(total - disc).toFixed(2);
    }
}

// Demo
const cart = new Cart();
cart.addItem(new CartItem('Shoes', 2000, 1));
cart.addItem(new CartItem('Socks', 200, 2));
console.log('Total =', cart.getTotal());

console.log('Apply SAVE20:', cart.applyCoupon('SAVE20'));
console.log('Final =', cart.getFinalTotal());

if (typeof module !== 'undefined') module.exports = { Cart, CartItem };
