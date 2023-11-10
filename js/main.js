// Main.js

// Targeting
let textBox = document.querySelector("#display-text");
let buttons = document.querySelectorAll("button");

function handleButtonClick(event) {
    let ettc = "";
    if (event.type === "click") {
        ettc = event.target.textContent;
    }

    if (ettc >= '0' && ettc <= '9') {
        if (event.target.textContent === "0" && textBox.textContent === ""){}
        else textBox.textContent += event.target.textContent;
    } else if (ettc === 'AC') {
        textBox.textContent = "";
    } else if (ettc === '+/-') {
        if (textBox.textContent.charAt(0) === '-') {
            textBox.textContent = textBox.textContent.slice(1);
        } else {
            textBox.textContent = "-" + textBox.textContent;
        }
    } else if (ettc === '%') {
        textBox.textContent = parseFloat(textBox.textContent) / 100.0;
    } else if ("/x-+".includes(ettc)) {
        
    }
}



buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick)
});