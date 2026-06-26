/*

Write a function that capture value of bill, number of people from input field. When user click tip button the tip amount will automatically updated with total also updated. When user click custom, there will be a input field number that user can type how many percent it will give.

Step

Step 1 Calculation logic
- Tip per person = (bill * tip%) / people
- Total per person = (bill + (bill * tip%)) / people
- if people = 0, display "Can't be zero"
- if bill is empty default to 0
- if not tip selected tip is 0%

Step 2 
- Select DOM elements
- Store state variables
- create calculate() function

Step 3 Handle preset tip button
- Add a click event listener to each tip button
- Add active class to the clicked button
- Update tip percentage and call calculate()

Step 4 Handle custom tip button
- When custom tip button clicked, remove active class from all preset buttons
  - replace button innerHTML with input field number placeholder Custom
  - auto focus to input
- When user type in custom input
  - listen for the input event on the custom input
  - update tipPercentage and call calculate()

Step 5 Reset functionality
- When reset is clicked, clear all input, remove active states, reset custom button to "custom" text, clear result display to 0.00$

Step 6 Validation
- If people is 0 or negative, show error "can't be zero"
- If bill or tip is 0, tip result is $0

*/

const billInput = document.getElementById("bill__input");
const tipButtons = document.querySelectorAll(".tip__button");
const peopleInput = document.getElementById("people__input");
const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");
const resetButton = document.getElementById("reset__button");
const tipInput = document.getElementById("tip__input");
const tipGroup = document.getElementById("tip__group");
const tipError = document.getElementById("tip__error");
const billError = document.getElementById("bill__error");
const peopleError = document.getElementById("people__error");

let billValue = 0;
let tipPercentage = 0.15;
let peopleCount = 0;
let isCustomActive = false;

const calculate = () => {
  if (peopleCount === 0) {
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    return;
  } else if (peopleCount < 0 || tipPercentage < 0 || billValue < 0) {
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    return;
  }
  let tip = (billValue * tipPercentage) / peopleCount;
  let total = (billValue + billValue * tipPercentage) / peopleCount;

  tipPerPerson.textContent = tip.toFixed(2);
  totalPerPerson.textContent = total.toFixed(2);
};

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener("click", () => {
    tipButtons.forEach((btn) => {
      btn.classList.remove("tip__button--active");
    });
    tipBtn.classList.add("tip__button--active");

    if (tipBtn.textContent === "Custom") {
      tipGroup.classList.remove("tip__group--hidden");
    } else {
      tipGroup.classList.add("tip__group--hidden");
      tipPercentage = parseFloat(tipBtn.textContent.slice(0, -1)) / 100;
      calculate();
    }
  });
});

billInput.addEventListener("input", () => {
  if (billInput.value <= 0) {
    billError.classList.remove("bill__error--hidden");
    billError.textContent = "Can't be zero or negative";
    billInput.classList.add("bill__input--error");
    return;
  } else {
    billInput.classList.remove("bill__input--error");
    billError.classList.add("bill__error--hidden");
    billValue = parseFloat(billInput.value) || 0;
    calculate();
  }
});

peopleInput.addEventListener("input", () => {
  peopleCount = parseFloat(peopleInput.value) || 0;

  if (peopleInput.value <= 0) {
    peopleError.classList.remove("people__error--hidden");
    peopleError.textContent = "Can't be zero or negative";
    peopleInput.classList.add("people__input--error");
    return;
  } else {
    peopleInput.classList.remove("people__input--error");
    peopleError.classList.add("people__error--hidden");
  }
  calculate();
});

tipInput.addEventListener("input", () => {
  if (tipInput.value <= 0) {
    tipError.classList.remove("tip__error--hidden");
    tipError.textContent = "Can't be zero or negative";
    tipInput.classList.add("tip__input--error");
    return;
  } else {
    tipInput.classList.remove("tip__input--error");
    tipError.classList.add("tip__error--hidden");
    tipPercentage = parseFloat(tipInput.value) / 100;
    calculate();
  }
});

resetButton.addEventListener("click", () => {
  billValue = 0;
  tipPercentage = 0.15;
  peopleCount = 0;
  isCustomActive = false;

  billInput.value = 0;
  peopleInput.value = 0;
  tipButtons.forEach((btn) => {
    btn.classList.remove("tip__button--active");
    if (btn.textContent === "15%") {
      btn.classList.add("tip__button--active");
    }
  });
  tipPerPerson.textContent = "$0.00";
  totalPerPerson.textContent = "$0.00";
});
