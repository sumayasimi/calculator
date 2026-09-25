const display = document.getElementById("display");

let lastkeywasOperator = false;

function appendNumber(number) {
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
  lastkeywasOperator = false;
}

function appendOperator(operator) {
  if (display.value === "0" || lastkeywasOperator) {
    return;
  }
  display.value += operator;
  lastkeywasOperator = true;
}

function clearDisplay() {
  display.value = "0";
  lastkeywasOperator = false;
}

function calculate() {
  try {
    eval();
    let result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = error;
  }
  lastkeywasOperator = false;
}
