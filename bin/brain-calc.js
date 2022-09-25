#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { exportedName, greetings } from '../src/cli.js';

export default () => {
  console.log('brain-calc');
  console.log('');
  greetings();
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const firstNumber = Math.floor(Math.random() * 50) + 1;
    const secondNumber = Math.floor(Math.random() * 50) + 1;
    const indexOfMathOperation = Math.floor(Math.random() * 3) + 1;
    let operation;
    if (indexOfMathOperation === 1) {
      operation = '+';
    } else if (indexOfMathOperation === 2) {
      operation = '-';
    } else if (indexOfMathOperation === 3) {
      operation = '*';
    }
    const answer = `${firstNumber}${operation}${secondNumber}`;
    const question = readlineSync.question(`Question: ${firstNumber}${operation}${secondNumber} `);
    console.log(`Your answer: ${question}`);
    if (question === answer) {
      console.log('Correct');
      i += 1;
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${exportedName}!`);
  } else {
    console.log(`Let's try again, ${exportedName}`);
  }
};
