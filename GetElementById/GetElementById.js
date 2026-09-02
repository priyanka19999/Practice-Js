//getElementById() is a JavaScript DOM method used to find an HTML element using its id.
let button = document.getElementById("changeBtn");
let element = document.getElementById("message");
button.addEventListener("click", function() {
    element.innerHTML = "Hello Priyanka!";
});