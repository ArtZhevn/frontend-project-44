import readlineSync from 'readline-sync';
import startProgression from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';
const logicOfTheGame = () => {
  const minStep = 2;
  const lastIndex = 9;
  const firstIndex = 0;
  let beginOfArray = getRandomNumber();
  const stepOfProgression = getRandomNumber(lastIndex, minStep);
  const arrOfProgression = [];
  const emptyElement = getRandomNumber(lastIndex, firstIndex);
  while (arrOfProgression.length <= lastIndex) {
    arrOfProgression.push(beginOfArray);
    beginOfArray += stepOfProgression;
  }
  const answer = arrOfProgression[emptyElement];
  arrOfProgression[emptyElement] = '..';
  const input = readlineSync.question(`Question: ${arrOfProgression.join(' ')} `);
  console.log(`Your answer: ${input}`);
  return [Number(input), answer];
};

const runGame = () => {
  startProgression(description, logicOfTheGame);
};
export default runGame;
