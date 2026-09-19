
// Accessing Object Properties
// Method 1: Dot notation

let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};
console.log(student.name); //Rahul

//Method 2: Bracket Notation
console.log(student["age"]); //21
console.log(student["course"]); //JavaScript


// When Should You Use Bracket Notation?
// This becomes important when the property name is stored in a variable.

let student1 = {
    name: "Barsha",
    age: 22,
    course: "Python"
};

let property = "name";
console.log(student1[property]);
console.log(student1["course"]);
console.log(student1["age"]);
