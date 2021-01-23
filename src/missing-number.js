export const missingNumber = arr => {
  const n = arr.length + 1;
  console.log('n: ', n);
  // eslint-disable-next-line no-mixed-operators
  const expectedSum = n * (n + 1) / 2;
  console.log('expectedSum', expectedSum);
  let sum = 0;
  // eslint-disable-next-line no-plusplus
  for (let i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];
  }

  return expectedSum - sum;
};

export default { missingNumber };

console.log(missingNumber([5, 2, 6, 1, 3]));
