class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;   
    }

    calculateAverage() {
        const total = this.marks.reduce((acc, curr) => acc + curr, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();

        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 60) return "C";
        return "F";
    }
}


const s1 = new Student("Anurag", [95, 88, 92]);
const s2 = new Student("Priya", [76, 81, 69]);
const s3 = new Student("Ravi", [45, 58, 52]);

console.log(`${s1.name}: Avg = ${s1.calculateAverage()}, Grade = ${s1.getGrade()}`);
console.log(`${s2.name}: Avg = ${s2.calculateAverage()}, Grade = ${s2.getGrade()}`);
console.log(`${s3.name}: Avg = ${s3.calculateAverage()}, Grade = ${s3.getGrade()}`);
