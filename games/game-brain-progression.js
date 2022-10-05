#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, giveRightAnswer, giveWrongAnswer } from '../src/index.js';
import randomNumb from '../src/utils.js';

export default () => {
  greetings();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const minStep = 2;
    const lastIndex = 9;
    const firstIndex = 0;
    let beginOfArray = randomNumb();
    const stepOfProgression = randomNumb(lastIndex, minStep);
    const arrOfProgression = [];
    const emptyElement = randomNumb(lastIndex, firstIndex);
    while (arrOfProgression.length <= lastIndex) {
      arrOfProgression.push(beginOfArray);
      beginOfArray += stepOfProgression;
    }
    const answer = arrOfProgression[emptyElement];
    arrOfProgression[emptyElement] = '..';
    const input = readlineSync.question(`Question: ${arrOfProgression.join(' ')} `);
    console.log(`Your answer: ${input}`);
    if (Number(input) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }
  if (i === 3) {
    giveRightAnswer();
  } else {
    giveWrongAnswer();
  }
};
