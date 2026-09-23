// Object Method Using this
// "this" refers to the object/context that is calling the function.
let person = {
    name: "Rahul",

    greet: function() {
        console.log("Hello " + this.name); //Get the name property from the object that is calling this method.
    }
};

person.greet(); 