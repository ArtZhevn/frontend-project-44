#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default () => {
  console.log('brain-even');
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
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
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

// убрать ввод ответа в игре
// первая строчка игры
