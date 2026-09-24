// The spread operator ... is used to copy or combine properties from one object into another object.
let person = {
    name: "Rahul",
    age: 21
};

let newPerson = {
    ...person,
     city: "Delhi" //You can also add properties:
};

console.log(newPerson);

// Combining Objects
// This is where spread becomes really useful.
let personalInfo = {
    name: "Priyanka",
    age: 21
};

let professionalInfo = {
    job: "Developer",
    salary: 50000
};

let person1 = {
    ...personalInfo,
    ...professionalInfo
};

console.log(person1);
// { name: 'Priyanka', age: 21, job: 'Developer', salary: 50000 }