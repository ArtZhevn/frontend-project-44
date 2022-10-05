#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, giveRightAnswer, giveWrongAnswer } from '../index.js';
import ranomNumb from '../utils.js';

export default () => {
  console.log('brain-gcd');
  greetings();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const firstNumber = ranomNumb();
    const secondNumber = ranomNumb();
    let count = 19;
    const input = readlineSync.question(`Question: ${firstNumber} ${secondNumber} `);
    console.log(`Your answer: ${input}`);
    while ((firstNumber % count !== 0) || (secondNumber % count !== 0)) {
      count -= 1;
    }
    const commonDivisor = count;
    if (Number(input) === commonDivisor) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${commonDivisor}'.`);
      break;
    }
  }
  if (i === 3) {
    giveRightAnswer();
  } else {
    giveWrongAnswer();
  }
};
