// Object.keys()
// JavaScript provides built-in methods for working with objects.
let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};
console.log(Object.keys(student));
//Object.keys(student): gives you an array of keys.

// Object.values()
console.log(Object.values(student)); 
//[ 'Rahul', 21, 'JavaScript' ]
// Object.values(student):gives you an array of values.


// Object.entries()
console.log(Object.entries(student));
// [[ 'name', 'Rahul' ], [ 'age', 21 ], [ 'course', 'JavaScript' ]]