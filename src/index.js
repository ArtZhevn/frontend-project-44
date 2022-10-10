import readlineSync from 'readline-sync';

export default (nameOfGame, rulesOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(nameOfGame);
  let count = 0;
  while (count < 3) {
    const arrayOfValues = rulesOfTheGame();
    if (arrayOfValues[0] === arrayOfValues[1]) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${arrayOfValues[0]} is wrong answer ;(. Correct answer was '${arrayOfValues[1]}'.`);
      break;
    }
  }
  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
