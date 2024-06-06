// script.js

let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
}

function appendNumber(number) {
    if (display.innerText === '0' && number !== '.') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
    currentInput += number;
}

function appendOperator(op) {
    if (currentInput === '') return;
    if (operator !== '') {
        calculateResult();
    }
    operand1 = currentInput;
    operator = op;
    currentInput = '';
    display.innerText += op;
}

function deleteLast() {
    if (currentInput !== '') {
        currentInput = currentInput.slice(0, -1);
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculateResult() {
    if (currentInput === '' || operator === '' || operand1 === '') return;
    operand2 = currentInput;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
        default:
            return;
    }
    display.innerText = result;
    currentInput = result.toString();
    operator = '';
    operand1 = '';
    operand2 = '';
}
