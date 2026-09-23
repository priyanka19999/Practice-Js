// Object destructuring is a way to take values out of an object and store them in variables.

let student = {
    name: "Rahul",
    age: 20
};

let { name: studentName, age: studentAge } = student;

console.log(studentName); //Rahul
console.log(studentAge); // 20