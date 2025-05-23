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

    const match = currentInput.match(expression)
    if (!match) return

    const [, a, operator, b] = match;
    
    currentInput = operate(a, operator, b);
    currentInput = Math.round(currentInput*100000000000)/100000000000;
    display.textContent = currentInput;
}

const display = document.querySelector("#display");
const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator")
const equalButton = document.querySelector(".equal")
const clearButton = document.querySelector(".clear")
const backButton = document.querySelector(".backspace");

let currentInput = '';
const expression = /(-?\d*\.?\d+)([\+\-\*\/])(-?\d*\.?\d+)/;

numButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (typeof currentInput != 'string') {
            currentInput = '';
        }
        currentInput += button.textContent;
        operatorButtons.forEach(opButton => {
            opButton.disabled = false;
        });
        display.textContent = currentInput;
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        operatorButtons.forEach(opButton => {
            opButton.disabled = false;
        });

        if (/[\+\-\*\/]$/.test(currentInput)) {
            currentInput = currentInput.slice(0, -1);
            button.disabled = false;
            display.textContent = currentInput;
        } else if (expression.test(currentInput)) {
            solve();
            button.disabled = false;
        }

        currentInput += button.textContent;
        display.textContent = currentInput;

        button.disabled = true;
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