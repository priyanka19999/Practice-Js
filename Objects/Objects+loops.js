let student = {
    name: "Rahul",
    age: 21,
    course: "JavaScript"
};

// You can loop through the properties using for...in.
for (let key in student) {
    console.log(key);
} 
// name
// age
// course

for (let key in student) {
    console.log(student[key]);
}

// Rahul
// 21
// JavaScript

for (let key in student) {
    console.log(key, ":", student[key]);
}

// name : Rahul
// age : 21
// course : JavaScript