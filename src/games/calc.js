import getRandomNumber from '../utils.js';
import startCalc from '../index.js';

const description = 'What is the result of the expression?';

const calcExpression = (number1, number2, operation) => {
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

const generateRound = () => {
  const number1 = getRandomNumber(1, 19);
  const number2 = getRandomNumber(1, 19);
  const arrOfMathOperation = ['+', '-', '*'];
  const operation = arrOfMathOperation[getRandomNumber(0, arrOfMathOperation.length - 1)];
  const expression = `${number1} ${operation} ${number2}`;
  const answer = calcExpression(number1, number2, operation);
  return [expression, String(answer)];
};

const runGame = () => {
  startCalc(description, generateRound);
};
export default runGame;
