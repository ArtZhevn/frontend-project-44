import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startCalc from '../index.js';

const description = 'What is the result of the expression?';
const lastRandomIndex = 3;
let expression;
const logicOfTheGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const indexOfMathOperation = getRandomNumber(lastRandomIndex);
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
