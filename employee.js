class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department) {
        super(name, department);
    }

    work() {
        return `${this.name} is managing the ${this.department} team.`;
    }
}

const e1 = new Employee("Rahul", "Sales");
const m1 = new Manager("Saksham", "Tech");

const workers = [e1, m1];

workers.forEach(worker => {
    console.log(worker.work()); 
});
