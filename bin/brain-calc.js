#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('brain-calc');
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  while (i < 3) {
    const firstNumber = Math.floor(Math.random() * 50) + 1;
    const secondNumber = Math.floor(Math.random() * 50) + 1;
    const indexOfMathOperation = Math.floor(Math.random() * 3) + 1;
    let expression;
    let answer; // numb
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
    const question = readlineSync.question(`Question: ${expression} `); // str
    console.log(`Your answer: ${question}`);
    if (Number(question) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${question}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
