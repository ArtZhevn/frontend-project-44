#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startGcd from '../index.js';
import getRandomNumber from '../utils.js';

const nameOfTheGame = 'Find the greatest common divisor of given numbers.';
const rulesOfTheGame = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  let count = 19;
  const input = readlineSync.question(`Question: ${firstNumber} ${secondNumber} `);
  console.log(`Your answer: ${input}`);
  while ((firstNumber % count !== 0) || (secondNumber % count !== 0)) {
    count -= 1;
  }
  const answer = count;
  return [Number(input), answer];
};

startGcd(nameOfTheGame, rulesOfTheGame);
