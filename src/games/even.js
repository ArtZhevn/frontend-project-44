import getRandomNumber from '../utils.js';
import startEven from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomNumber(1, 19);
  const answer = isEven(number) ? 'yes' : 'no';
  return [String(number), answer];
};

const runGame = () => {
  startEven(description, generateRound);
};

export default runGame;
