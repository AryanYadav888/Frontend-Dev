"use strict";



class Product {
constructor(id, name, price, category) {
this.id = id;
this.name = name;
this.price = Number(price);
this.category = category;
}


applyDiscount(percent) {
const discount = (this.price * percent) / 100;
this.price = Number((this.price - discount).toFixed(2));
return this.price;
}


getDetails() {
return `Product [${this.id}] - ${this.name} | Category: ${this.category} | Price: ₹${this.price}`;
}
}


// Create products and store in array
const products = [
new Product(1, "Smartphone", 24999, "Electronics"),
new Product(2, "T-Shirt", 799, "Apparel"),
new Product(3, "Laptop", 59999, "Electronics"),
new Product(4, "Coffee Maker", 3499, "Home Appliances"),
new Product(5, "Watch", 1999, "Accessories")
];


// Apply 10% discount to a product (example)
products[0].applyDiscount(10);


// Display products with price > 1000
const expensiveProducts = products.filter(p => p.price > 1000);
console.log("Products with price > 1000:");
expensiveProducts.forEach(p => console.log(p.getDetails()));
