// A class in JavaScript is a blueprint used to create multiple objects that have similar properties and methods.

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(
            "My name is " + this.name +
            " and I am " + this.age + " years old."
        );
    }
}


let student1 = new Student("Rahul", 21);
let student2 = new Student("Amit", 22);

student1.introduce();
student2.introduce();

// My name is Rahul and I am 21 years old.
// My name is Amit and I am 22 years old.