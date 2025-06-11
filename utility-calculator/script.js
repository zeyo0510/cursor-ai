const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let previousInput = '';
let operation = null;
let resetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value >= '0' && value <= '9' || value === '.') {
            if (resetScreen) {
                currentInput = value;
                resetScreen = false;
            } else {
                currentInput += value;
            }
            display.value = currentInput;
        } else if (value === 'C') {
            currentInput = '';
            previousInput = '';
            operation = null;
            display.value = '';
        } else if (value === '=') {
            if (operation && previousInput && currentInput) {
                currentInput = calculate(previousInput, currentInput, operation);
                display.value = currentInput;
                operation = null;
                resetScreen = true;
            }
        } else {
            if (currentInput === '') return;
            if (previousInput !== '') {
                previousInput = calculate(previousInput, currentInput, operation);
            } else {
                previousInput = currentInput;
            }
            operation = value;
            resetScreen = true;
            display.value = '';
        }
    });
});

function calculate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+': return (a + b).toString();
        case '-': return (a - b).toString();
        case '*': return (a * b).toString();
        case '/': return (a / b).toString();
        default: return b;
    }
} 