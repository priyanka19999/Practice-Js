// Object.freeze() is a built-in JavaScript method that prevents an existing object from being modified at the top level.


const student = {
    name: "Priyanka",
    age: 22
};

Object.freeze(student);

student.age = 25;
student.course = "BTech";

delete student.name;

console.log(student);


/*The object remains unchanged.
- student.age = 25 does not change the age.
- student.course = "BTech" does not add a property.
- delete student.name does not remove the name. */