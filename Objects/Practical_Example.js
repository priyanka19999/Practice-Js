let employee = {
    name: "Priyanka",
    age: 25,
    department: "IT",
    salary: 50000,

    displayInfo() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }
};

employee.displayInfo();