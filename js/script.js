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

let sum = 0;
let operatorValue = '';
let tempDisplayValue = 0;

function operate(operatorInnerText) {
  operatorValue = operatorInnerText;
  tempDisplayValue = displayValue;
  displayValue = 0;
  display.value = 0;
}

function equalsSum() {
  if (operatorValue === '+') {
    sum = add(+tempDisplayValue, +displayValue);
    display.value = sum;
  }
}

const display = document.getElementById('result'); // select display element
const numberButtons =
  document.getElementsByClassName('number-button'); // select all number buttons 0-9
const operatorButtons =
  document.getElementsByClassName('operator-button'); // select all operator buttons %, x, -, +, =
const equalsBtn = document.getElementById('equalsBtn'); // select the equals (=) button

let displayValue = 0;

/* loop through every number button,
   add event listener and on click update displayValue to number clicked
   check if temp is 0, if it is don't update temp to displayValue
   (when when user first inputs number it doesn't start with a 0)
*/
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener('click', () => {
    let temp = displayValue;
    let selfBtn = numberButtons[i];
    if (temp === 0) {
      displayValue = selfBtn.innerText;
      display.value = selfBtn.innerText;
      console.log(displayValue);
    } else {
      temp = displayValue;
      displayValue = temp + selfBtn.innerText;
      display.value = displayValue;
      console.log(displayValue);
    }
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  let selfBtn = operatorButtons[i];
  selfBtn.addEventListener('click', () => {
    let operatorInnerText = selfBtn.innerText;
    operate(operatorInnerText);
  });
}

equalsBtn.addEventListener('click', () => {
  equalsSum();
});
