import readlineSync from 'readline-sync';
import startProgression from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (beginOfProgression, stepOfProgression, lastIndexOfProgression) => {
  const arrOfProgression = [];
  for (let i = 0; i < lastIndexOfProgression; i += 1) {
    arrOfProgression.push(beginOfProgression + (i * stepOfProgression));
  }
  return arrOfProgression;
};

const description = 'What number is missing in the progression?';
const minStep = 2;
const lastIndexOfProgression = 9;
const firstIndex = 0;
const maxRandomNumber = 19;
const minRandomNumber = 1;
const logicOfTheGame = () => {
  const beginOfProgression = getRandomNumber(minRandomNumber, maxRandomNumber);
  const stepOfProgression = getRandomNumber(lastIndexOfProgression, minStep);
  const emptyElement = getRandomNumber(lastIndexOfProgression, firstIndex);
  const progression = getProgression(beginOfProgression, stepOfProgression, lastIndexOfProgression);
  const answer = progression[emptyElement];
  progression[emptyElement] = '..';
  const input = readlineSync.question(`Question: ${progression.join(' ')} `);
  console.log(`Your answer: ${input}`);
  return [input, String(answer)];
};

const runGame = () => {
  startProgression(description, logicOfTheGame);
};
export default runGame;
