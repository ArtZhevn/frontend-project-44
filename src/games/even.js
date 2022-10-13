import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startEven from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const logicOfTheGame = () => {
  let answer;
  const checkNumber = getRandomNumber();
  const input = readlineSync.question(`Question: ${checkNumber} `);
  console.log(`Your answer: ${input}`);
  if (checkNumber % 2 === 0) {
    answer = 'yes';
  } else if (checkNumber % 2 !== 0) {
    answer = 'no';
  }
  return [input, answer];
};

const runGame = () => {
  startEven(description, logicOfTheGame);
};

export default runGame;
