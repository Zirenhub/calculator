const numberButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll(
  '.operator-button'
);
const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');
const display = document.querySelector('.display-box');

function add(numOne, numTwo) {
  return numOne + numTwo;
}
function subtract(numOne, numTwo) {
  return numOne - numTwo;
}
function multiply(numOne, numTwo) {
  return numOne * numTwo;
}
function divide(numOne, numTwo) {
  return numOne / numTwo;
}

let displayValue = '';
let operator = '';
let temp = '';
let sum = '';

function updateDisplay(selfBtn) {
  display.value = selfBtn;
  displayValue += display.value;
  display.value = displayValue;
}

function operate(selfBtn) {
  operator = selfBtn;
  if (operator === '+') {
    temp = +temp + +displayValue;
    displayValue = '';
  } else if (operator === '-') {
    temp = +temp - +displayValue;
    displayValue = '';
  } else if (operator === 'x') {
    temp = +temp * +displayValue;
    displayValue = '';
  } else if (operator === '%') {
    temp = +temp / +displayValue;
    displayValue = '';
  }
}

function equalsSum() {
  if (operator === '+') {
    sum = +temp + +displayValue;
  } else if (operator === '-') {
    sum = +temp - +displayValue;
  } else if (operator === 'x') {
    sum = +temp * +displayValue;
  } else if (operator === '%') {
    sum = +temp / +displayValue;
  }
  display.value = Number(sum);
  displayValue = '';
  temp = sum;
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let selfBtn = button.innerText;
    updateDisplay(selfBtn);
  });
});

operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    let selfBtn = button.innerText;
    operate(selfBtn);
  });
});

equalsButton.addEventListener('click', () => {
  equalsSum();
});
