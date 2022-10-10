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




