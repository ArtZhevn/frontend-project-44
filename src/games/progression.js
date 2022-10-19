import runEngine from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (begin, step, lastIndex) => {
  const arrOfProgression = [];
  for (let i = 0; i < lastIndex; i += 1) {
    arrOfProgression.push(begin + (i * step));
  }
  return arrOfProgression;
};

const generateRound = () => {
  const lastIndex = 10;
  const begin = getRandomNumber(1, 19);
  const step = getRandomNumber(1, 9);
  const progression = getProgression(begin, step, lastIndex);
  const emptyElement = getRandomNumber(0, progression.length - 1);
  const answer = progression[emptyElement];
  progression[emptyElement] = '..';
  return [progression.join(' '), String(answer)];
};

const runGame = () => {
  runEngine(description, generateRound);
};
export default runGame;
