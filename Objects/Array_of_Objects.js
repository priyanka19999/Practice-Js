let students = [
    {
        name: "Rahul",
        age: 21
    },

    {
        name: "Amit",
        age: 22
    },

    {
        name: "Priya",
        age: 20
    }
];

console.log(students[0]); //{ name: 'Rahul', age: 21 }
console.log(students[1].age); //22


// Loop Through Array of Objects
let studentss = [
    {
        name: "Aman",
        age: 21
    },

    {
        name: "Anup",
        age: 22
    },

    {
        name: "Aiswariya",
        age: 20
    }
];

for (let student of studentss) {
    console.log(student.name);
}


// Aman
// Anup
// Aiswariya