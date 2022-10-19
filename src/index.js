import readlineSync from 'readline-sync';

export default (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const gameRounds = 3;
  for (let count = 0; count < gameRounds; count += 1) {
    const [expression, correctAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${expression} `);
    console.log(`Your answer: ${answer}`);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
