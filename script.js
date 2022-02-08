// ! ELEMENTS

// ? Number Guessing Game
const inputGuessingGame = document.getElementById('input-num-ngg');
const btnSendGuessedNumber = document.getElementById('btn-send-ngg');
const btnResetGuessingGame = document.getElementById('btn-reset-ngg');
const resultNumberGuessing = document.getElementById('result-ngg');
const labelLives = document.getElementById('p-lives-ngg');

// ? Prime Number Finder
const btnSendPrimeNumber = document.getElementById('btn-send-pnf');
const inputPrimeNumber = document.getElementById('input-num-pnf');
const resultPrimeNumber = document.getElementById('result-pnf');

// ? Simple Calculator
const calcAction = document.getElementById('calc-action-sc');
const firstNumber = document.getElementById('first-number-sc');
const secondNumber = document.getElementById('second-number-sc');
const btnAddition = document.getElementById('btn-a-sc');
const btnSubtraction = document.getElementById('btn-s-sc');
const btnMultiplication = document.getElementById('btn-m-sc');
const btnDivision = document.getElementById('btn-d-sc');
const btnCalculate = document.getElementById('btn-send-sc');
const resultSimpleCalculator = document.getElementById('result-sc');

// ? Text Repeater
const inputRepeatNum = document.getElementById('input-num-tr');
const inputRepeatText = document.getElementById('input-text-tr');
const flexCheckSpace = document.getElementById('flex-check-space-tr');
const flexCheckLine = document.getElementById('flex-check-line-tr');
const resultTextRepeater = document.getElementById('result-tr');
const btnRepeat = document.getElementById('btn-send-tr');
const textarea = document.getElementById('textarea-tr');
const btnCopy = document.getElementById('btn-copy-tr');
const btnClear = document.getElementById('btn-clear-tr');

// ? Converter
const inputTemperature = document.getElementById('input-temperature-c');
const inputTmpDisable = document.getElementById('input-temperature-disabled-c');
const btnSendTemp = document.getElementById('btn-send-c');
const flexRadioCtoF = document.getElementById('flex-radio-cf-c');
const flexRadioFtoC = document.getElementById('flex-radio-fc-c');
const resultTemperature = document.getElementById('result-c');
const btnReverse = document.getElementById('btn-temp-reverse-c');

// ! GLOBAL VARIABLES

// ? Number Guessing Game
let randomNumber;
let lives;
let getGuessedNumber;
let compr;

// ? Prime Number Finder
let getPrimeNumber;
let controller;
let inputtedNumber1;
let inputtedNumber2;
let resultOp;

// ? Converter
let tempController;

// ! FUNCTIONS

// ? Number Guessing Game

const guessAgain = () => {
  lives = 7;
  randomNumber = Math.trunc(Math.random() * 100);
  labelLives.textContent = 'Lives: ' + lives;
  inputGuessingGame.value = '';
  inputGuessingGame.removeAttribute('disabled');
  resultNumberGuessing.textContent = '';
};

// ? Prime Number Finder

const isEven = num => num % 2 === 0;

// ? Text Repeater

const repeater = (space, line) => {
  for (let i = 0; i < inputRepeatNum.value; i++)
    textarea.innerHTML += inputRepeatText.value + space + line;
};

const copyToClipboard = () => navigator.clipboard.writeText(textarea.value);

// ! HANDLERS

// ? Number Guessing Game
btnSendGuessedNumber.addEventListener('click', () => {
  getGuessedNumber = Number(inputGuessingGame.value);
  if (getGuessedNumber !== randomNumber) {
    getGuessedNumber < randomNumber ? (compr = 'bigger') : (compr = 'smaller');
    resultNumberGuessing.textContent = `Try entering a ${compr} number.`;
    lives--;
    labelLives.textContent = 'Lives: ' + lives;
  } else {
    inputGuessingGame.setAttribute('disabled', true);
    resultNumberGuessing.textContent =
      'You guessed right, excellent! If you want to play again, try entering a new number';
  }

  if (lives === 0) {
    inputGuessingGame.setAttribute('disabled', true);
    alert(
      "Sorry, you didn't guess correctly. The number you had to guess was: " +
        randomNumber
    );
    guessAgain();
  }
});

btnResetGuessingGame.addEventListener('click', guessAgain);

// ? Prime Number Finder
btnSendPrimeNumber.addEventListener('click', () => {
  getPrimeNumber = Number(inputPrimeNumber.value);
  controller = false;

  if (getPrimeNumber <= 0)
    resultPrimeNumber.textContent = `The number you enter must be a positive integer. Please enter an integer greater than zero.`;
  else if (getPrimeNumber === 2)
    resultPrimeNumber.textContent = `The number ${getPrimeNumber} you entered is a prime number.`;
  else if (getPrimeNumber === 1 || isEven(getPrimeNumber))
    resultPrimeNumber.textContent = `The number ${getPrimeNumber} you entered is not a prime number.`;
  else {
    for (let i = 2; i <= getPrimeNumber / 2; i++) {
      if (getPrimeNumber % i === 0) {
        controller = true;
        break;
      }
    }
    controller === true
      ? (resultPrimeNumber.textContent = `The number ${getPrimeNumber} you entered is not a prime number.`)
      : (resultPrimeNumber.textContent = `The number ${getPrimeNumber} you entered is a prime number.`);
  }
});

// ? Simple Calculator
[btnAddition, btnSubtraction, btnMultiplication, btnDivision].forEach(
  operation => {
    operation.style.cursor = 'pointer';
    operation.addEventListener(
      'click',
      () => (calcAction.textContent = operation.textContent)
    );
  }
);

btnCalculate.addEventListener('click', () => {
  inputtedNumber1 = Number(firstNumber.value);
  inputtedNumber2 = Number(secondNumber.value);

  switch (calcAction.textContent) {
    case '+':
      resultOp = inputtedNumber1 + inputtedNumber2;
      break;
    case '-':
      resultOp = inputtedNumber1 - inputtedNumber2;
      break;
    case '*':
      resultOp = inputtedNumber1 * inputtedNumber2;
      break;
    case '/':
      resultOp = inputtedNumber1 / inputtedNumber2;
      break;
    default:
      resultOp = 'Please select an action';
      break;
  }
  resultSimpleCalculator.textContent = 'Result: ' + resultOp;
});

// ? Text Repeater

btnRepeat.addEventListener('click', () =>
  flexCheckLine.checked
    ? flexCheckSpace.checked
      ? repeater(' ', '\n')
      : repeater('', '\n')
    : flexCheckSpace.checked
    ? repeater(' ', '')
    : repeater('', '')
);

btnClear.addEventListener('click', () => (textarea.innerHTML = null));
btnCopy.addEventListener('click', copyToClipboard);

// ? Converter
tempController = false;
btnSendTemp.addEventListener('click', () => {
  tempController
    ? (inputTmpDisable.value = (inputTemperature.value - 32) / 1.8)
    : (inputTmpDisable.value = inputTemperature.value * 1.8 + 32);
});

btnReverse.addEventListener('click', () => {
  tempController === false ? (tempController = true) : (tempController = false);
  [inputTemperature.value, inputTmpDisable.value] = [
    inputTmpDisable.value,
    inputTemperature.value,
  ];
});
