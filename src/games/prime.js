import startPrime from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (checkNumber) => {
  if (checkNumber < 2) {
    return false;
  }
  for (let i = 2; i <= checkNumber / 2; i += 1) {
    if (checkNumber % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  let answer;
  const checkNumber = getRandomNumber(1, 19);
  if (isPrime(checkNumber) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [String(checkNumber), answer];
};

const runGame = () => {
  startPrime(description, generateRound);
};

export default runGame;
