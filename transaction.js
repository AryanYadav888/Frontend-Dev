"use strict";

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null
];

const valid = [];
const invalid = [];

for (let t of transactions) {
  try {
    debugger;

    if (t === null) throw new Error("Null transaction");
    if (!("id" in t) || !("amount" in t)) throw new Error("Missing property");
    if (typeof t.amount !== "number") throw new Error("Invalid amount type");
    if (t.amount < 0) throw new Error("Negative amount");

    valid.push(t);
  } catch (err) {
    invalid.push({ transaction: t, error: err.message });
  }
}

console.log("===== FINAL REPORT =====");
console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
