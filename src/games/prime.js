import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 19);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [String(number), answer];
};

const runGame = () => {
  runEngine(description, generateRound);
};

export default runGame;
