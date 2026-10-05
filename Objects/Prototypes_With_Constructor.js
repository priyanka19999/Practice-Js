// A constructor creates objects, while a prototype allows those objects to share methods.

// A prototype is an object that JavaScript uses to provide shared properties and methods to other objects.


function Employee(name, salary) {
    this.name = name;
    this.salary = salary;
}
Employee.prototype.getDetails = function() {
    console.log(
        "Name: " + this.name
    );

    console.log(
        "Salary: " + this.salary
    );
};

let employee1 = new Employee("Rahul", 50000);
let employee2 = new Employee("Priya", 60000);
employee1.getDetails();

// Name: Rahul
// Salary: 50000