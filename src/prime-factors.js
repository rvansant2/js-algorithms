export const primeFactors = n => {
  const factors = [];
  let divisor = 2;

  while (n > 2) {
    console.log('n value: ', n);
    if (n % divisor === 0) {
      factors.push(divisor);
      console.log('push divisor', divisor);
      n /= divisor;
    } else {
      // eslint-disable-next-line no-plusplus
      divisor++;
    }
    console.log('divisor', divisor);
  }
  return factors;
};

export default { primeFactors };

console.log(primeFactors(75));
