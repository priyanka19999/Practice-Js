let student3 = {
    name: "Rahul",
    age: 21
};
student3.city = "Delhi";
student3["course"] = "JavaScript";
console.log(student3);

// { name: 'Rahul', age: 21, city: 'Delhi', course: 'JavaScript' }

//Deleting Properties
// Use the delete keyword.
delete student3.city;
console.log(student3) //{ name: 'Rahul', age: 21, course: 'JavaScript' }