// calculator functions
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

function operate() {}

const display = document.getElementById('result'); // select display element
const numberButtons =
  document.getElementsByClassName('number-button'); // select all number buttons 0-9
const operatorButtons =
  document.getElementsByClassName('operator-button'); // select all operator buttons %, x, -, +

let displayValue = 0;

// loop through every number button, add event listener and on click update displayValue to number clicked
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', () => {
    let temp = displayValue;
    if (temp === 0) {
      displayValue = numberButtons[i].innerText;
      display.value = numberButtons[i].innerText;
      console.log(displayValue);
    } else {
      temp = displayValue;
      displayValue = temp + numberButtons[i].innerText;
      display.value = displayValue;
      console.log(displayValue);
    }
  });
}

function calculate() {}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click');
}
