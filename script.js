const screenDisplay = document.querySelector(".display")
const numButtons = document.querySelectorAll(".number");
const multiply = document.querySelector(".multiply")
const add = document.querySelector(".add")
const subtract = document.querySelector(".subtract")
const divide = document.querySelector(".divide")
const clear = document.querySelector(".clear")
const equals = document.querySelector(".equals")

screenDisplay.textContent = "0"; 

let currentNumber = 0;

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a-b
}

function divide(a, b) {
    return a/b
}

function multiply(a,b) {
    return a*b
}

numButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        if (screenDisplay.textContent === "0") {
            screenDisplay.textContent = ""; // Clear the zero placeholder
        }

        const number = this.textContent; 
        screenDisplay.textContent += number;
        currentNumber = screenDisplay.textContent
        console.log(currentNumber)
    });
});

console.log(currentNumber)

function operate(operator, a, b) {

}