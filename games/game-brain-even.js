#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetings, giveRightAnswer, giveWrongAnswer, positiveResponse, negativeResponse,
} from '../src/index.js';
import randomNumber from '../src/utils.js';

export default () => {
  console.log('brain-even');
  greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const checkNumber = randomNumber();
    const input = readlineSync.question(`Question: ${checkNumber} `);
    console.log(`Your answer: ${input}`);
    if (input === positiveResponse && checkNumber % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (input === negativeResponse && checkNumber % 2 !== 0) {
      console.log('Correct!');
      i += 1;
    } else if (input === negativeResponse && checkNumber % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (input === positiveResponse && checkNumber % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else {
      break;
    }
  }
  if (i === 3) {
    giveRightAnswer();
  } else {
    giveWrongAnswer();
  }
};
