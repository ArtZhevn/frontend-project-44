import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
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
