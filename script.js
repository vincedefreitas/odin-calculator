const display = document.querySelector('.display');
const numButtons = document.querySelectorAll('.num-btn');
const opButtons = document.querySelectorAll('.op-btn');
const clearButton = document.querySelector('.clear-btn');
const equalsButton = document.querySelector('.equals-btn');

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
    displayValue = ""
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
        firstNumberValue = displayValue;
        operatorValue = opButton.id;
        clear();
    });
});

equalsButton.addEventListener('click', () => {
    display.textContent = operate(operatorValue, +firstNumberValue, +displayValue);
});


clearButton.addEventListener('click', clear);


