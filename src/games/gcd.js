import readlineSync from 'readline-sync';
import startGCD from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';
const logicOfTheGame = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  let count = 19;
  const input = readlineSync.question(`Question: ${number1} ${number2} `);
  console.log(`Your answer: ${input}`);
  while ((number1 % count !== 0) || (number2 % count !== 0)) {
    count -= 1;
  }
  const answer = count;
  return [Number(input), answer];
};

const runGame = () => {
  startGCD(description, logicOfTheGame);
};

export default runGame;