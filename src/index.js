import readlineSync from 'readline-sync';

export default (description, logicOfTheGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const gameRounds = 3;
  let attempt;
  for (let count = 0; count < gameRounds; count += 1) {
    const arrayOfValues = logicOfTheGame();
    if (arrayOfValues[0] === arrayOfValues[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${arrayOfValues[0]}' is wrong answer ;(. Correct answer was '${arrayOfValues[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
    attempt = count;
  }
  if (attempt === gameRounds - 1) {
    console.log(`Congratulations, ${userName}!`);
  }
};
