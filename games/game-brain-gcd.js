#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetings, rightAnswer, wrongAnswer, lastRandomNumber, firstRandomNumber,
} from '../src/index.js';

export default () => {
  console.log('brain-gcd');
  greetings();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const firstNumber = Math.floor(Math.random() * lastRandomNumber) + firstRandomNumber;
    const secondNumber = Math.floor(Math.random() * lastRandomNumber) + firstRandomNumber;
    let count = 19;
    const input = readlineSync.question(`Question: ${firstNumber} ${secondNumber} `);
    console.log(`Your answer: ${input}`);
    while ((firstNumber % count !== 0) || (secondNumber % count !== 0)) { // почему ||, а не &&
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
    rightAnswer();
  } else {
    wrongAnswer();
  }
};
