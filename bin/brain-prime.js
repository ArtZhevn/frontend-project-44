#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('brain-calc');
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const positiveResponse = 'yes';
    const negativeResponse = 'no';
    let answer;
    const allDeviders = [];
    const arrOfDeviders = [];
    const isPrime = Math.floor(Math.random() * 19) + 1;
    for (let firstElementOfArr = 1; firstElementOfArr <= 19; firstElementOfArr += 1) {
      arrOfDeviders.push(firstElementOfArr);
    }
    for (let indexOfDeviders = 0; indexOfDeviders < arrOfDeviders.length; indexOfDeviders += 1) {
      if (isPrime % arrOfDeviders[indexOfDeviders] === 0) {
        allDeviders.push(arrOfDeviders[indexOfDeviders]);
      }
    }
    if (allDeviders.length <= 2) {
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
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};
