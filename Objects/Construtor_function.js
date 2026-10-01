// A constructor function is basically a function used as a template for creating objects.

function Person(name, age,Salary) {
    this.name = name;
    this.age = age;
    this.Salary = Salary; //800000
}

const person1 = new Person("Priyanka", 22, 800000);
console.log(person1.age); //22
console.log(person1.Salary);
 
//In function section u create all properties and by using this keyword a new object can have access to the existed properties by only declaring its value , so no need to recall the properties again and again..



/*Problem-1
Create a constructor function called Student that accepts three parameters: 
name age course Using this, store these values as object properties. Then create three student objects using the new keyword and print each object to the console. */

function StudentDetails(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;

    this.introduce = function() {
        console.log(
            "My name is " + this.name +
            ", I am " + this.age +
            " years old and I study " + this.course
        );
    };
}

const student1 = new StudentDetails("Priyanka", 22, "JavaScript");

const student2 = new StudentDetails("Rahul", 24, "Python");

const student3 = new StudentDetails("Anita", 21, "Java");

student1.introduce();
student2.introduce();
student3.introduce();


/*My name is Priyanka, I am 22 years old and I study JavaScript
My name is Rahul, I am 24 years old and I study Python
My name is Anita, I am 21 years old and I study Java */