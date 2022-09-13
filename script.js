const buttons = document.getElementsByClassName('button');
const screenTop = document.getElementById('display-expr');
const screenBottom = document.getElementById('display-result');

const calculator = {
    step : "firstNumber",
    firstNumber : "",
    operator : "",
    secondNumber : "",
    add() {
      return parseInt(this.firstNumber) + parseInt(this.secondNumber);
    },
    substract() {
      return parseInt(this.firstNumber) - parseInt(this.secondNumber);
    },
    multiply() {
      return parseInt(this.firstNumber) * parseInt(this.secondNumber);
    },
    divide() {
      return parseInt(this.firstNumber) / parseInt(this.secondNumber);
    },
}

Array.from(buttons).forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log(e.target.id);
        workWith(e.target.id);
    })
})

function workWith(key) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let operators = [" / ", " x ", " - ", " + "];
    if (numbers.includes(key)) {
        if (calculator[calculator.step].length >= "12") {
            alert('Too long');
        } else {
            calculator[calculator.step] += key;
        }
        screenBottom.textContent = calculator[calculator.step];
    } else if (operators.includes(key)) {
        if (calculator.step === "firstNumber" && calculator.firstNumber === "") {
            calculator.firstNumber += 0
            toSecondNumber(key)
        } else if (calculator.step === "firstNumber" && calculator.firstNumber != "") {
            toSecondNumber(key)
        } else if (calculator.step === "secondNumber" && calculator.secondNumber === "") {
            toSecondNumber(key)
        } else if (calculator.step === "secondNumber" && calculator.secondNumber != "") {
            console.log(calculator.operator);
            let result = letsCalc(calculator.operator);
            console.log(result.toString());
            calculator.firstNumber = result.toString();
            calculator.operator = key;
            screenBottom.textContent = calculator.firstNumber;
            screenTop.textContent = calculator.firstNumber + calculator.operator;
            calculator.secondNumber = "";
        }
    } else if (key === "return") {
        let result = letsCalc(calculator.operator)
        screenTop.textContent = screenTop.textContent + screenBottom.textContent + " = ";
        calculator.firstNumber = result.toString();
        screenBottom.textContent = calculator.firstNumber;
        calculator.secondNumber = "";
        calculator.operator = "";


    }
}

function toSecondNumber(key) {
    calculator.operator = key;
    calculator.step = "secondNumber"
    screenTop.textContent = screenBottom.textContent + calculator.operator;
}

function letsCalc(ope) {
    switch (ope) {
        case ' + ':
            return calculator.add();
            break;
        case ' - ':
            return calculator.substract();
            break;
        case ' / ':
            return calculator.divide();
            break;
        case ' x ':
            return calculator.multiply();
            break;
    }
}


function checkNumber(key) {
    return (calculator[calculator.step].length >= "12") ? alert('Too Long') : calculator[calculator.step] += key;
}

/*

function startListen(expr) {
    let numberBtn = document.getElementsByClassName('key');
    for (let btn of numberBtn) {
        btn.addEventListener('click', function(event) {
            event.stopPropagation();
            console.log('ok');
            expr += btn.textContent + " ";
            displayExpr(expr);
        })
    }
    document.getElementById('return').addEventListener('click', function(event) {
        event.stopPropagation();
        displayResult(expr)
    })
};


function displayExpr(str) {
    if (document.getElementById('displayResult').textContent != "") {

    }
    document.getElementById('display-expr').textContent = str;
};

function displayResult(str) {
    document.getElementById('display-result').textContent = eval(str);
};



calcul();

*/