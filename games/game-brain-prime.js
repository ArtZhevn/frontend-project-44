#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  greetings, rightAnswer, wrongAnswer, positiveResponse, negativeResponse,
} from '../src/index.js';

export default () => {
  console.log('brain-prime');
  greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    let answer;
    const allDeviders = [];
    const arrOfDeviders = [];
    const isPrime = Math.floor(Math.random() * 19) + 1;
    for (let firstElementOfArr = 1; firstElementOfArr <= isPrime; firstElementOfArr += 1) {
      arrOfDeviders.push(firstElementOfArr); // массив всех делителей (1)
    }
    for (let indexOfDeviders = 0; indexOfDeviders < arrOfDeviders.length; indexOfDeviders += 1) {
      if (isPrime % arrOfDeviders[indexOfDeviders] === 0) {
        allDeviders.push(arrOfDeviders[indexOfDeviders]);
      }
    }
    if (allDeviders.length <= 2 && isPrime !== 1) {
      answer = positiveResponse;
    } else {
      answer = negativeResponse;
    }
    const question = readlineSync.question(`Question: ${isPrime} `);
    console.log(`Your answer: ${question}`);
    if (question === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${question}" is wrong answer ;(. Correct answer was "${answer}".`);
      break;
    }
  }
  if (i === 3) {
    rightAnswer();
  } else {
    wrongAnswer();
  }
};
