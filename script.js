const billInput = document.getElementById("billInput");
const tipButtons = document.querySelectorAll(".tip__button");
const peopleInput = document.getElementById("peopleInput");
const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");
const resetButton = document.getElementById("resetButton");
const tipInput = document.getElementById("tipInput");
const tipGroup = document.getElementById("tipGroup");
const tipError = document.getElementById("tipError");
const billError = document.getElementById("billError");
const peopleError = document.getElementById("peopleError");

let billValue = 0;
let tipPercentage = 0.15;
let peopleCount = 0;
let isCustomActive = false;

const calculate = () => {
  if (peopleCount <= 0 || tipPercentage < 0 || billValue < 0) {
    tipPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
    return;
  }
  let tip = (billValue * tipPercentage) / peopleCount;
  let total = (billValue + billValue * tipPercentage) / peopleCount;

  tipPerPerson.textContent = `$${tip.toFixed(2)}`;
  totalPerPerson.textContent = `$${total.toFixed(2)}`;
};

tipButtons.forEach((tipBtn) => {
  tipBtn.addEventListener("click", () => {
    tipButtons.forEach((btn) => {
      btn.classList.remove("button--active");
    });
    tipBtn.classList.add("button--active");

    if (tipBtn.getAttribute("text") === "Custom") {
      tipGroup.classList.remove("tip__group--hidden");
      if (!tipInput.value) {
        tipPercentage = 0;
      } else {
        tipPercentage = parseFloat(tipInput.value) / 100;
      }
      setTimeout(() => tipInput.focus(), 0);
    } else {
      tipGroup.classList.add("tip__group--hidden");
      tipPercentage = parseFloat(tipBtn.textContent.slice(0, -1)) / 100;
    }
    calculate();
  });
});

const validateInput = (input, errorEl, min = 0, prefix = "input") => {
  const valid = input.value > min;
  errorEl.classList.toggle(`${prefix}__error--hidden`, valid);
  input.classList.toggle(`${prefix}__input--error`, !valid);
  return valid;
};

billInput.addEventListener("input", () => {
  const valid = validateInput(billInput, billError);
  if (!valid) {
    billError.textContent = "Can't be zero negative";
    billValue = 0;
  } else {
    billValue = parseFloat(billInput.value) || 0;
  }

  calculate();
});

peopleInput.addEventListener("input", () => {
  const valid = validateInput(peopleInput, peopleError);
  if (!valid) {
    peopleError.textContent = "Can't be zero or negative";
    return;
  }
  peopleCount = parseFloat(peopleInput.value) || 0;
  calculate();
});

tipInput.addEventListener("input", () => {
  const value = parseFloat(tipInput.value);

  if (tipInput.value === "" || isNaN(value) || value < 0) {
    tipError.textContent = "Can't be negative";
    validateInput(tipInput, tipError, 0, "tip");
    return;
  } else {
    tipPercentage = value / 100;
    validateInput(tipInput, tipError, 0, "tip");
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
  tipInput.value = 0;
  tipButtons.forEach((btn) => {
    btn.classList.remove("button--active");
    if (btn.textContent === "15%") {
      btn.classList.add("button--active");
    }
  });
  tipPerPerson.textContent = "$0.00";
  totalPerPerson.textContent = "$0.00";
});
