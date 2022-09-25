#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { exportedName, greetings } from '../src/cli.js';

const brainEven = () => {
  console.log('brain-even');
  console.log('');
  greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    const positiveResponse = 'yes';
    const negativeResponse = 'no';
    const numb = Math.floor(Math.random() * 50) + 1;
    const question = readlineSync.question(`Question: ${numb} `);
    console.log(`Your answer: ${question}`);
    if (question === positiveResponse && numb % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (question === negativeResponse && numb % 2 !== 0) {
      console.log('Correct!');
      i += 1;
    } else if (question === negativeResponse && numb % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      break;
    } else if (question === positiveResponse && numb % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      break;
    } else {
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${exportedName}!`);
  } else {
    console.log(`Let's try again, ${exportedName}`);
  }
};
brainEven();

// убрать ввод ответа в игре
// пофиксить let в импорте из cli.js
// первая строчка игры
