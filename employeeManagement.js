class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * (percent / 100);
  }
}

let employees = [
  new Employee(1, "Rohan", "HR", 30000),
  new Employee(2, "Priya", "Finance", 45000),
  new Employee(3, "Amit", "Tech", 60000),
  new Employee(4, "Neha", "Marketing", 35000),
  new Employee(5, "Vikas", "Support", 25000)
];

employees.forEach(e => {
  console.log(`${e.name} Annual Salary: ${e.getAnnualSalary()}`);
});

let totalPayout = employees.reduce((sum, emp) => sum + emp.getAnnualSalary(), 0);

console.log("Total Annual Payout:", totalPayout);
