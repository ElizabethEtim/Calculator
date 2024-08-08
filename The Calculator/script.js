function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

/*let firstOperand = ''
let secondOperand = ''
let currentOperation = null
let shouldResetScreen = false
let currentOperationScreen =''

function appendToDisplay(value) {
    if (currentOperation.textContent === '0')
    currentOperation.textContent += value
  }


function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = currentOperationScreen.textContent
    currentOperation = operator
    shouldResetScreen = true
  }*/

  
  function add(a, b) {
    return a + b
  }
  
  function substract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }

  function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return substract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }

  /*function calculateResult(){
   
    let operator;
    let result;
    
    if(operator == "+"){
        result = (a+b);
    }if(operator == "-"){
        result = (a-b);
    }if(operator == "*"){
        result = (a*b);
    }if(operator == "/"){
        result = (a/b);
    }
    display.innerText = result
}*/