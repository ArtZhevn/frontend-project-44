#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('brain-calc');
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i < 3) {
    let beginOfArray = Math.floor(Math.random() * 20) + 1;
    const stepOfProgression = Math.floor(Math.random() * 9) + 2;
    const emptyElement = Math.floor(Math.random() * 9) + 0;
    const arrOfProgression = [];
    while (arrOfProgression.length < 10) {
      arrOfProgression.push(beginOfArray);
      beginOfArray += stepOfProgression;
    }
    const answer = arrOfProgression[emptyElement];
    arrOfProgression[emptyElement] = '..';
    const question = readlineSync.question(`Question: ${arrOfProgression} `);
    console.log(`Your answer: ${question}`);
    if (Number(question) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answer}.`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};
