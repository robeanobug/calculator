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
    a = Number(a);
    b = Number(b);

    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator == "/") {
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
const backButton = document.querySelector(".backspace");

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
});

equalButton.addEventListener("click", () => {
    let operation = currentInput.split(/(\d+)([\+\-\*\/])(\d+)/);
    currentInput = operate(operation[1], operation[2], operation[3]);
    display.textContent = currentInput;
});

backButton.addEventListener("click", () => {
    currentInput = currentInput.split('').slice(0, -1).join('');
    display.textContent = currentInput;
});