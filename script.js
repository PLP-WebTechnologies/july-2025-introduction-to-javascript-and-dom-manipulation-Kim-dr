/* ================================
   PART 1 - VARIABLES AND CONDITIONALS
===================================*/

// 1. Age Checker
let age = 25;

if (age < 18) {
    console.log('You are a minor.');
} else if (age >= 18 && age < 65) {
    console.log('You are an adult.');
} else {
    console.log('You are a senior citizen.');
}

// 2. Calculator
let figure1 = 150;
let figure2 = 43;
let operator = '+'; // Try '+', '-', '*', '/'

if (operator === '+') {
    console.log('Result: ' + (figure1 + figure2));
} else if (operator === '-') {
    console.log('Result: ' + (figure1 - figure2));
} else if (operator === '*') {
    console.log('Result: ' + (figure1 * figure2));
} else if (operator === '/') {
    console.log('Result: ' + (figure1 / figure2));
} else {
    console.log('Invalid operator');
}

/* ================================
   PART 2 - FUNCTIONS
===================================*/

// 1. Greeting Function
function greet(name, role) {
    return 'Hello ' + name + ', you are a ' + role + '.';
}

// Test in console
console.log(greet("Kim", "student"));
console.log(greet("John", "developer"));

// 2. Calculate total price of items
function items(price, quantity) {
    return price * quantity;
}

console.log("Total cost: " + items(500, 3));

/* ================================
   PART 3 - LOOPS
===================================*/

// 1. Print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Array of people
const population = [30, 40, 500];
for (let person of population) {
    console.log(person);
}

// 3. Countdown Timer (while loop)
let countdown = 10;
while (countdown >= 1) {
    console.log(countdown + '... Happy New Year!');
    countdown--;
}

/* ================================
   PART 4 - DOM MANIPULATION
===================================*/

window.onload = function() {
    // 1. Change the text of an <h2> when button is clicked
    window.alterText = function() {
        let fun = document.getElementById("fun");
        fun.textContent = "JavaScript is fun!";
        fun.style.color = "cyan";
        fun.style.backgroundColor = "goldenrod";
        fun.style.fontSize = "20px";
        fun.style.textAlign = "center";
        
    };

    // 2. Update attributes of an image
    const image = document.getElementById("image");
    image.setAttribute("src", "https://images.pexels.com/photos/33538310/pexels-photo-33538310.jpeg");
    image.setAttribute("alt", "A beautiful scenery");
    image.style.width = "500px";
    image.style.height = "300px";
    image.style.borderRadius = "10px";

    // 3. Add a CSS class to paragraph
    const text = document.getElementById("text");
    text.classList.add("centered-text");
};
