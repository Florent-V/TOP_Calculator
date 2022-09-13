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
            calculator.operator = key;
            calculator.step = "secondNumber"
            screenTop.textContent = screenBottom.textContent + calculator.operator;
        } else if (calculator.step === "firstNumber" && calculator.firstNumber != "") {
            calculator.operator = key;
            calculator.step = "secondNumber"
            screenTop.textContent = screenBottom.textContent + calculator.operator;
        } else if (calculator.step === "secondNumber" && calculator.secondNumber === "") {
            calculator.operator = key;
            calculator.step = "secondNumber"
            screenTop.textContent = screenBottom.textContent + calculator.operator;
        } else if (calculator.step === "secondNumber" && calculator.secondNumber === "") {
            letsCalc(calculator.firstNumber, calculator.secondNumber, calculator.operator)
        }
    }
}