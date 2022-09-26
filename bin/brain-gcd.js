#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('brain-gcd');
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i < 3) {
    const firstNumber = Math.floor(Math.random() * 50) + 1;
    const secondNumber = Math.floor(Math.random() * 50) + 1;
    let count = 50;
    const question = readlineSync.question(`Question: ${firstNumber} ${secondNumber} `);
    console.log(`Your answer: ${question}`);
    while ((firstNumber % count !== 0) || (secondNumber % count !== 0)) {
      count -= 1;
    }
    const commonDivisor = count;
    if (Number(question) === commonDivisor) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${commonDivisor}'.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
