#!/usr/bin/env node
import readlineSync from 'readline-sync';
import startPrime from '../index.js';
import getRandomNumber from '../utils.js';

const nameOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const rulesOfTheGame = () => {
  let answer;
  const allDeviders = [];
  const arrOfDeviders = [];
  const isPrime = getRandomNumber();
  for (let firstElementOfArr = 1; firstElementOfArr <= isPrime; firstElementOfArr += 1) {
    arrOfDeviders.push(firstElementOfArr);
  }
  for (let indexOfDeviders = 0; indexOfDeviders < arrOfDeviders.length; indexOfDeviders += 1) {
    if (isPrime % arrOfDeviders[indexOfDeviders] === 0) {
      allDeviders.push(arrOfDeviders[indexOfDeviders]);
    }
  }
  if (allDeviders.length <= 2 && isPrime !== 1) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  const input = readlineSync.question(`Question: ${isPrime} `);
  console.log(`Your answer: ${input}`);
  return [input, answer];
};

export default startPrime(nameOfGame, rulesOfTheGame);
