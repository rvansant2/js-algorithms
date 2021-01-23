export const reverseInPlace = str => str.split(' ').reverse().join(' ').split('')
  .reverse()
  .join('');

export default { reverseInPlace };

console.log(reverseInPlace('I am the good boy'));
