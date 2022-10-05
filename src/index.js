/* eslint-disable import/no-mutable-exports */
import readlineSync from 'readline-sync';

export let exportedName;
export const greetings = () => {
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  exportedName = name;
};

export const giveRightAnswer = () => {
  console.log(`Congratulations, ${exportedName}!`);
};

export const giveWrongAnswer = () => {
  console.log(`Let's try again, ${exportedName}!`);
};

export const positiveResponse = 'yes';
export const negativeResponse = 'no';
