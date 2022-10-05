export default (lastRandomNumber = 19, firstRandomNumber = 1) => {
  const randomNumb = Math.floor(Math.random() * lastRandomNumber) + firstRandomNumber;
  return randomNumb;
};
