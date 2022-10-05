#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetings, giveRightAnswer, giveWrongAnswer, lastRandomNumber, firstRandomNumber,
} from '../src/index.js';

export default () => {
  greetings();
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    const maxStep = 9;
    const minStep = 2;
    let beginOfArray = Math.floor(Math.random() * lastRandomNumber) + firstRandomNumber;
    const stepOfProgression = Math.floor(Math.random() * maxStep) + minStep;
    const emptyElement = Math.floor(Math.random() * 9) + 0;
    const arrOfProgression = [];
    while (arrOfProgression.length < 10) {
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
