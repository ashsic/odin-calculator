// Main.js

// Targeting, variable declaration
let textBox = document.querySelector("#display-text");
let buttons = document.querySelectorAll("button");
let operator = "";
let storedNum = "";
let equalsCount = 0;
let tempNum = "";
let keyArray = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '-',
    '=',
    '+',
    '/',
    '*',
    '%'
];

// Functions
function handleButtonClick(event) {

    let ettc = "";
    if (event.type === "click") {
        ettc = event.target.textContent;
    } else {
        ettc = event.key + "";
    }

    if (textBox.textContent.length > 20 && ettc !== "AC") {
        document.querySelector("#error").textContent = "Error: Input too large.";
        return;
    }

    if (ettc >= '0' && ettc <= '9') {
        if (operator && !storedNum) {
            storedNum = textBox.textContent;
            textBox.textContent = "";
        }
        if (textBox.textContent === "0"){
            textBox.textContent = ettc;
        } else textBox.textContent += ettc;
    } else if (ettc === 'AC') {
        document.querySelector("#error").textContent = "";
        textBox.textContent = "";
        operator = "";
        storedNum = "";
    } else if (ettc === '+/-') {
        if (textBox.textContent.charAt(0) === '-') {
            textBox.textContent = textBox.textContent.slice(1);
        } else {
            textBox.textContent = "-" + textBox.textContent;
        };
    } else if (ettc === '%') {
        textBox.textContent = parseFloat(textBox.textContent) / 100.0;
    } else if ("/x-+".includes(ettc) && textBox.textContent) {
        if (operator && storedNum && textBox.textContent) {
            textBox.textContent = calculateResult(parseFloat(storedNum), parseFloat(textBox.textContent), operator);
            storedNum = "";
        };
        operator = ettc;
    } else if (ettc === '=') {
        if (!operator) {
            return;
        }
        if (equalsCount === 0) {
            tempNum = textBox.textContent;
            textBox.textContent = calculateResult(parseFloat(storedNum), parseFloat(textBox.textContent), operator);
            equalsCount += 1;
            storedNum = "";
        } else {
            textBox.textContent = calculateResult(parseFloat(textBox.textContent), parseFloat(tempNum), operator);
        };
    };

    if (ettc !== '=') {
        equalsCount = 0;
    };
};

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
            if (num2 === 0) {
                document.querySelector("#error").textContent = "Nice try! (Answer per IEEE754)";
            }
            return num1 / num2;
        }

    };
    return calculator[operator](num1, num2);
};

document.addEventListener("keydown", function inputHandler(event) {
    if (keyArray.includes(event.key)) {
        handleButtonClick(event);
    };
});