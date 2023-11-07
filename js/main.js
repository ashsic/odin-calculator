// Main.js

// Targeting
let textBox = document.querySelector("#display-text");
let digits = document.querySelector("#digits").querySelectorAll("button");


// Click handlers
function handleDigitClick(event){
    if (event.target.textContent === "0" && textBox.textContent === ""){}
    else textBox.textContent += event.target.textContent;
};











digits.forEach(digit=>{
    digit.addEventListener("click", handleDigitClick)
});