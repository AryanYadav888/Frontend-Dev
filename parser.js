"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

console.log("===== DYNAMIC DATA PARSER REPORT =====\n");

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`Index ${i}:`);
    console.log(" Original:", value);
    console.log(" Number  :", num);
    console.log(" Boolean :", bool);
    console.log(" String  :", str);

    if (!Number.isNaN(num)) {
        validNumbers.push(num);
    } else {
        invalidNumbers.push(value);
        console.log(" ⚠️ Invalid Number Found:", value);
    }

    console.log("---------------------------");
}

console.log("\n===== SUMMARY =====");
console.log(" Valid Numbers :", validNumbers);
console.log(" Invalid Values:", invalidNumbers);
console.log("\nReport Completed.");
