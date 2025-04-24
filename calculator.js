function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let a = 0;
let operator = '+'
let b = 0;

function operate(a, operator, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b);
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    } else {
        return "ERROR";
    }
}

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")

let currentInput = '';

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

clearButton.addEventListener("click", () => {
    currentInput = '';
    display.textContent = currentInput;
})

// testing
console.log(add(1, 2)); // expect 3
console.log(subtract(2, 1)); // expect 1
console.log(multiply(2, 4)); // expect 8
console.log(divide(4, 2)); // expect 2
console.log(operate(1, '+', 2)) // expect 3
console.log(operate(1, '-', 2)) // expect -1
console.log(operate(1, '*', 2)) // expect 2
console.log(operate(1, '/', 2)) // expect 0.5