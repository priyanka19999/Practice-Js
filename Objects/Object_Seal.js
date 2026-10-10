// Object.seal() is a built-in JavaScript method that prevents you from adding new properties or deleting existing properties, but it still allows you to modify the values of existing properties.


const student = {
    name: "Priyanka",
    age: 22
};

Object.seal(student);
student.age = 25;
student.course = "BTech";
delete student.name;

console.log(student);
//name: "Priyanka", age: 25



// Suppose you're developing an employee management system.

const employee = {
    name: "Priyanka",
    salary: 30000,
    department: "IT"
};

Object.seal(employee);
employee.salary = 40000;
employee.experience = 3;
delete employee.department;
console.log(employee);
// { name: 'Priyanka', salary: 40000, department: 'IT' }