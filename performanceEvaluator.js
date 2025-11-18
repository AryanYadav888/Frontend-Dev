let marks = [78, 92, 85, 88, 90];

let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let percentage = (total / 500) * 100;

let detained = marks.some(mark => mark < 35);

if (detained) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Percentage:", percentage.toFixed(2) + "%");
