import getRandomNumber from '../utils.js';
import startEven from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (checkNumber) => checkNumber % 2 === 0;

const generateRound = () => {
  const checkNumber = getRandomNumber(1, 19);
  let answer;
  answer = isEven(checkNumber);
  if (answer === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [String(checkNumber), answer];
};

const runGame = () => {
  startEven(description, generateRound);
};

export default runGame;
