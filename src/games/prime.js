import startPrime from '../index.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const logicOfTheGame = () => {
  let answer;
  const allDeviders = [];
  const arrOfDeviders = [];
  const isPrime = getRandomNumber(1, 19);
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
  return [isPrime, answer];
};

const runGame = () => {
  startPrime(description, logicOfTheGame);
};

export default runGame;
