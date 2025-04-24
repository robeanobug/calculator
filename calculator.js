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

function solve() {
    if (/\/0$/.test(currentInput)) {
        currentInput = "hahahahahahaha"
        display.textContent = currentInput;
        return;
    }
    let operation = currentInput.split(expression);
    currentInput = operate(operation[1], operation[2], operation[3]);
    currentInput = Math.round(currentInput*10000000000000)/10000000000000;
    display.textContent = currentInput;
}

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")
const backButton = document.querySelector(".backspace");

let currentInput = '';
const expression = /(\d*\.?\d+)([\+\-\*\/])(\d*\.?\d+)/;

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (typeof currentInput != 'string') {
            currentInput = '';
        }
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (expression.test(currentInput)) {
            solve();
        }
        currentInput += button.textContent;
        display.textContent = currentInput;
    });
});

clearButton.addEventListener("click", () => {
    currentInput = '';
    display.textContent = currentInput;
});

equalButton.addEventListener("click", () => {
    // if there's not a complete expression, don't do anything
    if (!expression.test(currentInput)) return;

    solve();
});

backButton.addEventListener("click", () => {
    currentInput = String(currentInput).slice(0, -1);
    display.textContent = currentInput;
});