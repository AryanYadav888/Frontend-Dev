const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 500, stock: 50 },
    { id: 3, name: "Shirt", category: "Clothing", price: 800, stock: 2 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1500, stock: 10 },
    { id: 5, name: "Mixer", category: "Home", price: 3000, stock: 1 },
    { id: 6, name: "Sofa Cover", category: "Home", price: 700, stock: 25 }
];

function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
    return products.reduce((total, p) => total + (p.price * p.stock), 0);
}

function groupByCategory() {
    return products.reduce((grouped, product) => {
        if (!grouped[product.category]) {
            grouped[product.category] = [];
        }
        grouped[product.category].push(product);
        return grouped;
    }, {});
}


console.log("Low Stock:", getLowStockProducts());
console.log("Sorted by Price:", sortProductsByPrice());
console.log("Total Inventory Value:", calculateTotalInventoryValue());
console.log("Grouped by Category:", groupByCategory());
