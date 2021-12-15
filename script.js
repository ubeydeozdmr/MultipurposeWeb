"use strict";

// NUMBER GUESSING GAME
const btnSendGuessedNumber = document.querySelector(
  "#collapseTwo .input-group button"
);
const btnResetGuessingGame = document.querySelector("#resetGame");
let randomNumber;
let lives;

guessAgain();
btnSendGuessedNumber.addEventListener("click", function () {
  console.log(randomNumber);
  let getGuessedNumber = document.querySelector("#collapseTwo input").value;
  if (getGuessedNumber != randomNumber) {
    let i;
    getGuessedNumber < randomNumber ? (i = "bigger") : (i = "smaller");
    document.querySelector(
      "#collapseTwo .p"
    ).textContent = `Try entering a ${i} number.`;
    lives--;
    document.querySelector("#lives").textContent = "Lives: " + lives;
  } else {
    document.querySelector("#collapseTwo .p").textContent =
      "You guessed right, excellent! If you want to play again, try entering a new number.";
  }

  if (lives === 0) {
    alert(
      "sorry, you didn't guess correctly. The number you had to guess was: " +
        randomNumber
    );
    guessAgain();
  }
});

btnResetGuessingGame.addEventListener("click", guessAgain);

function guessAgain() {
  lives = 7;
  randomNumber = Math.trunc(Math.random() * 100);
  document.querySelector("#lives").textContent = "Lives: " + lives;
}

// PRIME NUMBER FINDER
const btnSendPrimeNumber = document.querySelector("#collapseThree button");
btnSendPrimeNumber.addEventListener("click", function () {
  let getPrimeNumber = document.querySelector("#collapseThree input").value;
  let controller = 0;

  for (let i = 2; i < getPrimeNumber; i++) {
    if (getPrimeNumber % i == 0) {
      controller++;
      break;
    }
  }

  if (getPrimeNumber <= 0) {
    document.querySelector("#collapseThree p").textContent =
      "The number you enter must be a positive integer. Please enter an integer greater than zero.";
  } else if (controller != 0 || getPrimeNumber == 1) {
    document.querySelector(
      "#collapseThree p"
    ).textContent = `The number ${getPrimeNumber} you entered is not a prime number.`;
  } else {
    document.querySelector(
      "#collapseThree p"
    ).textContent = `The number ${getPrimeNumber} you entered is a prime number.`;
  }
});

// SIMPLE CALCULATOR
const btnCalculate = document.querySelector("#calculate");

const btnAddition = document.querySelector(
  "#collapseFour ul li:nth-child(1) .dropdown-item"
);
const btnSubtraction = document.querySelector(
  "#collapseFour ul li:nth-child(2) .dropdown-item"
);
const btnMultiplication = document.querySelector(
  "#collapseFour ul li:nth-child(3) .dropdown-item"
);
const btnDivision = document.querySelector(
  "#collapseFour ul li:nth-child(4) .dropdown-item"
);

for (let i = 0; i < 4; i++) {
  document.querySelectorAll("#collapseFour .dropdown-item")[i].style.cursor =
    "pointer";
}

btnAddition.addEventListener("click", function () {
  document.querySelector("#calc-action").textContent = btnAddition.textContent;
});
btnSubtraction.addEventListener("click", function () {
  document.querySelector("#calc-action").textContent =
    btnSubtraction.textContent;
});
btnMultiplication.addEventListener("click", function () {
  document.querySelector("#calc-action").textContent =
    btnMultiplication.textContent;
});
btnDivision.addEventListener("click", function () {
  document.querySelector("#calc-action").textContent = btnDivision.textContent;
});

btnCalculate.addEventListener("click", function () {
  let inputtedNumber1 = Number(document.querySelector("#first-number").value);
  let inputtedNumber2 = Number(document.querySelector("#second-number").value);
  let result;

  switch (document.querySelector("#calc-action").textContent) {
    case "Addition":
      result = inputtedNumber1 + inputtedNumber2;
      break;
    case "Subtraction":
      result = inputtedNumber1 - inputtedNumber2;
      break;
    case "Multiplication":
      result = inputtedNumber1 * inputtedNumber2;
      break;
    case "Division":
      result = inputtedNumber1 / inputtedNumber2;
      break;
  }

  document.querySelector("#collapseFour p").textContent = "Result: " + result;
});

// TEXT REPEATER
const inputRepeatNum = document.querySelector(
  "#collapseFive .input-group:nth-child(1) input"
);
const inputRepeatText = document.querySelector(
  "#collapseFive .input-group:nth-child(2) input"
);
const btnRepeat = document.querySelector("#collapseFive button");
btnRepeat.addEventListener("click", function () {
  if (document.querySelector("#collapseFive #flexCheckLine").checked) {
    document.querySelector("#collapseFive #flexCheckSpace").checked
      ? RepeaterFunction(
          " ",
          `
`
        )
      : RepeaterFunction(
          "",
          `
`
        );
  } else {
    document.querySelector("#collapseFive #flexCheckSpace").checked
      ? RepeaterFunction(" ", "")
      : RepeaterFunction("", "");
  }
});
const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", function () {
  document.querySelector("#collapseFive textarea").innerHTML = null;
});
const btnCopy = document.querySelector("#copy");
btnCopy.addEventListener("click", function () {
  let copyText = document.querySelector("#collapseFive textarea");
  navigator.clipboard.writeText(copyText.value);
});
const RepeaterFunction = function (space, enter) {
  for (let i = 0; i < inputRepeatNum.value; i++) {
    document.querySelector("#collapseFive textarea").innerHTML +=
      inputRepeatText.value + space + enter;
  }
};
