export default (lastRandomNumber = 19, firstRandomNumber = 1) => {
  const randomNumber = Math.floor(Math.random() * lastRandomNumber) + firstRandomNumber;
  return randomNumber;
};
