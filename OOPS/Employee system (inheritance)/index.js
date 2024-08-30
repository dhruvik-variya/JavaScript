class Employee {
  constructor(name, id, salary, reason, Bonus, workingdays) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.reason = reason;
    this.Bonus = Bonus;
    this.workingdays = workingdays;
  }
  getname(name){
    return this.name;
  }

  setname(name){
    this.name = name;
  }

  details() {
    return `Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}, Reason for Leaving: ${this.reason} , Working days: ${this.workingdays} `;
  }   

  resign(reason) {
    this.reason = reason;
    console.log(`${this.name} has been resigned reason: ${this.reason}`);
  }

  calculateBonus(percentage) {
    return this.salary * (0.5 / 100);
  }
}

class Manager extends Employee {
  constructor(name, id, salary, reason, department,workingdays) {
    super(name, id, salary, reason,0, workingdays);
    this.department = department;
  }

  details() {
    return `${super.details()}, Department: ${this.department}`;
  }

  approveLaves(employee) { 
    if (employee.workingdays > 26) {
      console.log(`${Employee.name} has been approved for resignation.`);
    }
    else {
      console.log(`${Employee.name} has not been approved for resignation.`);
    }
  }
}

let Employee1 = new Employee("Manoj ", 6641, 90000, "health reason", 450 , 29);
console.log(Employee1.details());

// bonus calculation
console.log("Bonus: ", Employee1.calculateBonus(5));

// resignation
Employee1.resign("for more increment");

let Manager1 = new Manager("John Doe", 7789, 120000, "performance reason", "Finance" , 31 );
console.log(Manager1.details());

// approval for leave
Manager1.approveLaves(Employee1);   




// get and set name of employee
console.log(Employee1.getname());

Employee1.setname("Sahil ");

console.log(Employee1.getname()); 