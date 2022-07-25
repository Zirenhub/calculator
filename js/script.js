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
  temp = +displayValue;
  displayValue = '';
  sum = '';
}

function equalsSum() {
  temp = +temp;
  displayValue = +displayValue;

  switch (operator) {
    case '+':
      sum = temp + displayValue;
      break;
    case '-':
      sum = temp - displayValue;
      break;
    case 'x':
      sum = temp * displayValue;
      break;
    case '%':
      sum = temp / displayValue;
      break;
    default:
      sum = displayValue;
  }
  display.value = +sum;
  temp = 0;
  displayValue = +sum;
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
