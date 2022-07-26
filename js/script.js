const numberButtons = document.querySelectorAll('.number-button');
const operationButtons = document.querySelectorAll(
  '.operator-button'
);
const equalsButton = document.querySelector('.equals-button');
const clearButton = document.querySelector('.clear-button');
const display = document.querySelector('.display-box');

let displayValue = '';
let operator = '';
let sum = '';
let temp = '';
let tempOperator = '';

function clearEverything() {
  displayValue = '';
  display.value = 0;
  operator = '';
  sum = '';
}

function updateDisplay(selfBtn) {
  display.value = selfBtn;
  displayValue += display.value;
  display.value = +displayValue;
}

function operate(selfBtn) {
  operator = selfBtn;
  temp = +temp;
  displayValue = +displayValue;
  sum = +sum;

  if (operator === '+') {
    if (temp) {
      if (tempOperator === '-') {
        temp = temp - displayValue;
      } else {
        temp = temp + displayValue;
      }
      displayValue = 0;
      display.value = temp;
      tempOperator = '+';
    } else {
      temp = displayValue;
      displayValue = 0;
      tempOperator = '+';
    }
  } else if (operator === '-') {
    if (temp) {
      if (tempOperator === '+') {
        temp = temp + displayValue;
      } else {
        temp = temp - displayValue;
      }
      displayValue = 0;
      display.value = temp;
      tempOperator = '-';
    } else {
      temp = displayValue;
      displayValue = 0;
      tempOperator = '-';
    }
  }
}

function equalsSum() {
  temp = +temp;
  displayValue = +displayValue;
  sum = +sum;
  if (tempOperator === '+') {
    sum = temp + displayValue;
    displayValue = sum;
    display.value = sum;
    temp = 0;
  } else if (tempOperator === '-') {
    sum = temp - displayValue;
    displayValue = sum;
    display.value = sum;
    temp = 0;
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
