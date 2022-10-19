import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operation) => {
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
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const expression = `${number1} ${operation} ${number2}`;
  const answer = calculate(number1, number2, operation);
  return [expression, String(answer)];
};

const runGame = () => {
  runEngine(description, generateRound);
};
export default runGame;
