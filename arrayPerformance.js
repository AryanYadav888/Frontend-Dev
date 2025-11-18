let scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

let highest = Math.max(...scores);
let lowest = Math.min(...scores);
let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;
let passed = scores.filter(score => score >= 50).length;

console.log(`
Array Performance Summary
-------------------------
Scores: ${scores.join(", ")}
Highest Score: ${highest}
Lowest Score: ${lowest}
Average Score: ${average.toFixed(2)}
Students Passed (>= 50): ${passed}
`);
    
