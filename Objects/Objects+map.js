// Object + map(): 
// map():The map() method is an array method that calls a callback function for each element and returns a new array containing the results.
let students = [
    { name: "Rahul", marks: 80 },
    { name: "Amit", marks: 90 },
    { name: "Priya", marks: 85 }
];

let names = students.map(student => student.name);

console.log(names);

// [ 'Rahul', 'Amit', 'Priya' ]