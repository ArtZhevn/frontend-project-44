#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings, giveRightAnswer, giveWrongAnswer } from '../src/index.js';
import randomNumber from '../src/utils.js';

export default () => {
  console.log('brain-calc');
  greetings();
  console.log('What is the result of the expression?');
  let i = 0;
  const lastRandomIndex = 3;
  while (i < 3) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const indexOfMathOperation = randomNumber(lastRandomIndex);
    let expression;
    let answer;
    if (indexOfMathOperation === 1) {
      expression = `${firstNumber} + ${secondNumber}`;
      answer = firstNumber + secondNumber;
    } else if (indexOfMathOperation === 2) {
      expression = `${firstNumber} - ${secondNumber}`;
      answer = firstNumber - secondNumber;
    } else if (indexOfMathOperation === 3) {
      expression = `${firstNumber} * ${secondNumber}`;
      answer = firstNumber * secondNumber;
    }
    const input = readlineSync.question(`Question: ${expression} `);
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
