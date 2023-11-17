// Main.js

// Targeting
let textBox = document.querySelector("#display-text");
let buttons = document.querySelectorAll("button");
let operator = "";
let storedNum = "";

function handleButtonClick(event) {
    let ettc = "";
    if (event.type === "click") {
        ettc = event.target.textContent;
    }

    if (ettc >= '0' && ettc <= '9') {
        if (operator && !storedNum) {
            storedNum = textBox.textContent;
            textBox.textContent = "";
        }
        if (textBox.textContent === "0"){
            textBox.textContent = event.target.textContent;
        } else textBox.textContent += event.target.textContent;
    } else if (ettc === 'AC') {
        textBox.textContent = "";
        operator = "";
        storedNum = "";
    } else if (ettc === '+/-') {
        if (textBox.textContent.charAt(0) === '-') {
            textBox.textContent = textBox.textContent.slice(1);
        } else {
            textBox.textContent = "-" + textBox.textContent;
        }
    } else if (ettc === '%') {
        textBox.textContent = parseFloat(textBox.textContent) / 100.0;
    } else if ("/x-+".includes(ettc) && textBox.textContent) {
        if (operator && storedNum && textBox.textContent) {
            calculateResult(storedNum, textBox.textContent, operator);
        }
        operator = ettc;

    }
}

buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)
});

function calculateResult(num1, num2, operator) {
    const calculator = {
        "+": (num1, num2) => {
            return num1 + num2;
        },
        "-": (num1, num2) => {
            return num1 - num2;
        },
        "x": (num1, num2) => {
            return num1 * num2;
        },
        "/": (num1, num2) => {
            return num1 / num2;
        }
    }
    return calculator[operator](num1, num2);
}