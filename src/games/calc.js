import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startCalc from '../index.js';

const description = 'What is the result of the expression?';
const lastRandomIndex = 3;
const minRandomNumber = 1;
const maxRandomNumber = 19;
let expression;
const logicOfTheGame = () => {
  const number1 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const number2 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const indexOfMathOperation = getRandomNumber(minRandomNumber, lastRandomIndex);
  let answer;
  if (indexOfMathOperation === 1) {
    expression = `${number1} + ${number2}`;
    answer = number1 + number2;
  } else if (indexOfMathOperation === 2) {
    expression = `${number1} - ${number2}`;
    answer = number1 - number2;
  } else if (indexOfMathOperation === 3) {
    expression = `${number1} * ${number2}`;
    answer = number1 * number2;
  }
  const input = readlineSync.question(`Question: ${expression} `);
  return [Number(input), answer];
};

const runGame = () => {
  startCalc(description, logicOfTheGame);
};
export default runGame;
