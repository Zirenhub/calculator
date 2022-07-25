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
let tempTest = [];
let sum = '';

function clearEverything() {
  displayValue = '';
  display.value = 0;
  operator = '';
  temp = '';
  sum = '';
}

function updateDisplay(selfBtn) {
  display.value = selfBtn;
  displayValue += display.value;
  display.value = +displayValue;
}

function operate(selfBtn) {
  operator = selfBtn;
  if (operator === '+') {
    temp = +temp + +displayValue;
    displayValue = '';
  } else if (operator === '-') {
    tempTest.push(+displayValue);
    displayValue = '';
  } else if (operator === 'x') {
  } else if (operator === '%') {
  }
}

function equalsSum() {
  if (operator === '+') {
    sum = add(+temp, +displayValue);
    display.value = Number(sum);
    displayValue = '';
    temp = sum;
  } else if (operator === '-') {
    sum = tempTest[0];
    for (let i = 1; i < tempTest.length; i++) {
      sum = +sum - +tempTest[i] - +displayValue;
    }
    display.value = Number(sum);
    displayValue = Number(sum);
    tempTest = [];
  } else if (operator === 'x') {
  } else if (operator === '%') {
  }
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

clearButton.addEventListener('click', () => {
  clearEverything();
});
