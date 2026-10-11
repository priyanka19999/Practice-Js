// Shopping Cart
let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,

    getTotal() {
        return this.price * this.quantity;
    }
};

console.log(product.name);
console.log(product.getTotal());

// Laptop
// 100000


let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];

let total = 0;

for (let product of cart) {
    total += product.price * product.quantity;
}

console.log(total);