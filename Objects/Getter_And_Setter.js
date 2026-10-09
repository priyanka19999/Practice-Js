// Getters and setters are special methods in JavaScript objects that allow you to read and update an object's properties in a controlled way.

// What is a Getter?
// A getter is a special method that allows you to access a value as if it were a normal property
// It uses the get keyword.

const student = {
    firstName: "Hannah",
    lastName: "wellsy",

    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(student.fullName);

// Hannah wellsy



/* Step 1: Access the property

student.fullName

Step 2: Getter runs automatically

It combines firstName and lastName.

Step 3: Return the result

"Hannah wellsy"*/



// A setter is a special method that runs when you assign a value to a property. It lets you validate or modify that value before storing it.


const student1 = {
    age: 22,

    set updateAge(newAge) {
        if (newAge > 0) {
            this.age = newAge;
        } else {
            console.log("Invalid age!");
        }
    }
};

student1.updateAge = 25;

console.log(student1.age); // 25

student1.updateAge = -5;   // Invalid age!
console.log(student1.age); // 25
/*
If the value is positive, the age is updated.
If the value is invalid, the existing age remains unchanged.
*/



// Using Getter and Setter together


const person = {
    _age: 22,

    get age() {
        return this._age;
    },

    set age(newAge) {
        if (newAge >= 1 && newAge <= 100) {
            this._age = newAge;
        } else {
            console.log("Please enter a valid age!");
        }
    }
};

console.log(person.age); // 22

person.age = 25;
console.log(person.age); // 25

person.age = 150;        // Please enter a valid age!
console.log(person.age); // 25