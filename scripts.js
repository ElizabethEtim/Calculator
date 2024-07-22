let expressionDispaly = document.getElementById('expression');
let resultDisplay = document.getElementById('result');

function appendCharacter(character){
    expressionDispaly.textContent += character;
}

function clearDisplay(){
    expressionDispaly.textContent = '';
    resultDisplay.textContent = '';
}

function calculateResult(){
    try{
        let result = eval(expressionDispaly.textContent);
        resultDisplay.textContent = result;
    } catch (error){
        resultDisplay.textContent = 'Error';
    }
}