// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

const isLoggedIn = true;

if (isLoggedIn) {
    console.log('You are logged in! You may now add items to your cart.');
} else {
    console.log('Please log in before adding items to your cart.');
}

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

const products = ['shirt', 'jeans', 'shoes', 'socks', 'hat'];
const cart = [];
const item = ''; // Enter item from 'products' array here

for (const product in products) {
    console.log(`Product: ${products[product]}`);
}

if (products.includes(item)) {
    cart.push(item);
    console.log(`Item "${item}" added to cart!`);
} else if (!item) {
    console.log('Please add an item to cart.');
} else {
    console.log('That item isn\'t available right now.');
}

// Task 3: Calculate the total cost of the items in the cart and display it to the user.

const pricesInCart = [9.99, 12.99, 15.99, 4.99, 6.99];
let total = 0;

for (const price in pricesInCart) {
    total += pricesInCart[price];
}

console.log(`Your total is ${total}.`);