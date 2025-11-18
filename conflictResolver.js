let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log("Total Salary:", salary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus Value Outside Function:", bonus);
