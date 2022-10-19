import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  let count = 19;
  while ((number1 % count !== 0) || (number2 % count !== 0)) {
    count -= 1;
  }
  return count;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 19);
  const number2 = getRandomNumber(1, 19);
  const expression = `${number1} ${number2}`;
  const answer = getGCD(number1, number2);
  return [expression, String(answer)];
};

const runGame = () => {
  runEngine(description, generateRound);
};

export default runGame;
