import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startCalc from '../index.js';

const description = 'What is the result of the expression?';
const lastRandomIndex = 2;
const minRandomNumber = 1;
const maxRandomNumber = 19;
const calcExpression = (number1, number2, operation) => { // возможно стоит заменить на switch
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};
//  let answer;
//  if (operation === '+') {
//    answer = number1 + number2;
//  } else if (operation === '-') {
//    answer = number1 - number2;
//  } else if (operation === '*') {
//    answer = number1 * number2;
//  }
//  return answer;
// };
const logicOfTheGame = () => {
  const number1 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const number2 = getRandomNumber(minRandomNumber, maxRandomNumber);
  const indexOfMathOperation = getRandomNumber(minRandomNumber - 1, lastRandomIndex);
  const arrOfMathOperation = ['+', '-', '*'];
  const correctAnswer = calcExpression(number1, number2, arrOfMathOperation[indexOfMathOperation]);
  const expression = `${number1} ${arrOfMathOperation[indexOfMathOperation]} ${number2}`;
  const input = readlineSync.question(`Question: ${expression} `);
  return [input, String(correctAnswer)];
};

const runGame = () => {
  startCalc(description, logicOfTheGame);
};
export default runGame;
