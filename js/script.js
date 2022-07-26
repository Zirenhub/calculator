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
let decimalCheck = '';

function clearEverything() {
  displayValue = '';
  display.value = 0;
  operator = '';
  sum = '';
  temp = '';
  tempOperator = '';
}

function updateDisplay(selfBtn) {
  display.value = selfBtn;
  displayValue += display.value;
  display.value = +displayValue;
  decimalCheck = displayValue.replace(/[0-9]/g, '');
  if (decimalCheck === '.') {
    console.log('decimal detected');
    document.getElementById('dotBtn').disabled = true;
  } else {
    document.getElementById('dotBtn').disabled = false;
  }
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
      } else if (tempOperator === 'x') {
        temp = temp * displayValue;
      } else if (tempOperator === '%') {
        temp = temp / displayValue;
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
      } else if (tempOperator === 'x') {
        temp = temp * displayValue;
      } else if (tempOperator === '%') {
        temp = temp / displayValue;
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
  } else if (operator === 'x') {
    if (temp) {
      if (tempOperator === '+') {
        temp = temp + displayValue;
      } else if (tempOperator === '-') {
        temp = temp - displayValue;
      } else if (tempOperator === '%') {
        temp = temp / displayValue;
      } else {
        temp = temp * displayValue;
      }
      displayValue = 0;
      display.value = temp;
      tempOperator = 'x';
    } else {
      temp = displayValue;
      displayValue = 0;
      tempOperator = 'x';
    }
  } else if (operator === '%') {
    if (temp) {
      if (tempOperator === '+') {
        temp = temp + displayValue;
      } else if (tempOperator === '-') {
        temp = temp - displayValue;
      } else if (tempOperator === 'x') {
        temp = temp * displayValue;
      } else {
        temp = temp / displayValue;
      }
      displayValue = 0;
      display.value = temp;
      tempOperator = '%';
    } else {
      temp = displayValue;
      displayValue = 0;
      tempOperator = '%';
    }
  } else {
    displayValue = (displayValue - (displayValue % 10)) / 10;
    display.value = displayValue;
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
  } else if (tempOperator === 'x') {
    sum = temp * displayValue;
    displayValue = sum;
    display.value = sum;
    temp = 0;
  } else if (tempOperator === '%') {
    sum = temp / displayValue;
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
