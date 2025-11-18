let numbers = [];
let result = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

for (let num of numbers) {
    if (num % 3 === 0 && num % 5 === 0) {
        result.push("FizzBuzz");
    } else if (num % 2 === 0) {
        result.push("Even");
    } else {
        result.push("Odd");
    }
}

console.log(result);
