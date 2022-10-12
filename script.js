const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num-btn');
const opButtons = document.querySelectorAll('.op-btn');
const clearButton = document.querySelector('.clear-btn');
const equalsButton = document.querySelector('.equals-btn');
const backspaceButton = document.querySelector('.backspace');

let displayValue = "";
let firstNumberValue = "";
let operatorValue = "";
let secondNumberValue = "";

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

let operators = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
}

function operate(operator, num1, num2) {
    if (operator in operators) {
        return operators[operator](num1, num2);
    }
}

function clear() {
    displayValue = "";
    firstNumberValue = "";
    operatorValue = "";
    display.textContent = displayValue;
}


numButtons.forEach((numButton) => {
    numButton.addEventListener('click', () => {
        displayValue += numButton.textContent
        display.textContent = displayValue;
    });
});

opButtons.forEach((opButton) => {
    opButton.addEventListener('click', () => {
        if (firstNumberValue && displayValue) {
            display.textContent = operate(operatorValue, +firstNumberValue, +displayValue);
            displayValue = display.textContent;
            firstNumberValue = displayValue;
            operatorValue = opButton.id;
            displayValue = "";
        } else {
            firstNumberValue = displayValue;
            operatorValue = opButton.id;
            displayValue = "";
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (!firstNumberValue) {
        display.textContent = displayValue;
    } else if (+displayValue === 0 && operatorValue === "/") {
        display.textContent = "Really?"
    } else {
        display.textContent = operate(operatorValue, +firstNumberValue, +displayValue);
    }
    
});

backspaceButton.addEventListener('click', () => {
    displayValue = displayValue.slice(0, -1);
    display.textContent = displayValue;
});


clearButton.addEventListener('click', clear);


