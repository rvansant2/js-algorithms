export const isPrime = n => {
  let divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    }
    // eslint-disable-next-line no-plusplus
    divisor++;
    console.log(divisor);
  }
  return true;
};

export default { isPrime };
