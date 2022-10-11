#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startCalc from '../index.js';

const rulesOfTheGame = 'What is the result of the expression?';
const lastRandomIndex = 3;
let expression;
const logicOfTheGame = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const indexOfMathOperation = getRandomNumber(lastRandomIndex);
  let answer;
  if (indexOfMathOperation === 1) {
    expression = `${firstNumber} + ${secondNumber}`;
    answer = firstNumber + secondNumber;
  } else if (indexOfMathOperation === 2) {
    expression = `${firstNumber} - ${secondNumber}`;
    answer = firstNumber - secondNumber;
  } else if (indexOfMathOperation === 3) {
    expression = `${firstNumber} * ${secondNumber}`;
    answer = firstNumber * secondNumber;
  }
  const input = readlineSync.question(`Question: ${expression} `);
  return [Number(input), answer];
};

export default startCalc(rulesOfTheGame, logicOfTheGame);
