const menu = {
    pizza: 200,
    burger: 120,
    pasta: 150,
    momo: 80,
    fries: 60
};

function calculateBill(orderItems) {
    const prices = orderItems.map(item => {
        if (!menu[item]) {
            throw new Error(`❌ Invalid Item Ordered: ${item}`);
        }
        return menu[item];  
    });

    const total = prices.reduce((acc, curr) => acc + curr, 0);

    return total;
}

try {
    const order = ["pizza", "burger", "fries"]; 
    const bill = calculateBill(order);
    console.log(`✔ Total Bill: ₹${bill}`);
} 
catch (error) {
    console.log("Error:", error.message);
}

try {
    const wrongOrder = ["pizza", "pasta", "chicken"]; 
    const bill = calculateBill(wrongOrder);
    console.log(`Bill: ₹${bill}`);
} 
catch (error) {
    console.log("Error:", error.message);
}
