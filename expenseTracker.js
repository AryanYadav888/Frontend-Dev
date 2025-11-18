let expenses = [12000, 3000, 15000, 2500, 5000];

let total = expenses[0] + expenses[1] + expenses[2] + expenses[3] + expenses[4];
let average = total / expenses.length;

total += total * 0.10;

console.log("Total (before tax): ₹" + (average * expenses.length).toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Final Amount (after 10% tax): ₹" + total.toFixed(2));
