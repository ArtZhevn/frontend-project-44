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
const lastIndexOfProgression = 10;
const logicOfTheGame = () => {
  const beginOfProgression = getRandomNumber(1, 19);
  const stepOfProgression = getRandomNumber(2, 9);
  const emptyElement = getRandomNumber(2, 9);
  const progression = getProgression(beginOfProgression, stepOfProgression, lastIndexOfProgression);
  const answer = progression[emptyElement];
  progression[emptyElement] = '..';
  return [progression.join(' '), String(answer)];
};

const runGame = () => {
  startProgression(description, logicOfTheGame);
};
export default runGame;
