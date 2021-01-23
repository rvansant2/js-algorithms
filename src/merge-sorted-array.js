export const mergeSortedArray = (a, b) => {
  const merged = [];
  let aElm = a[0];
  let bElm = b[0];
  let i = 1;
  let j = 1;

  if (a.length === 0) {
    return b;
  }

  if (b.length === 0) {
    return a;
  }

  /**
   * if aElm or bElm exists we will insert to merged array
  (will go inside while loop)
    to insert: aElm exists and bElm doesn't exists
              or both exists and aElm < bElm
    this is the critical part of the example
  */
  while (aElm || bElm) {
    if ((aElm && !bElm) || aElm < bElm) {
      console.log(aElm);
      merged.push(aElm);
      // eslint-disable-next-line no-plusplus
      aElm = a[i++];
    } else {
      console.log(bElm);
      merged.push(bElm);
      bElm = b[j++];
    }
  }
  return merged;
};

export default { mergeSortedArray };

mergeSortedArray([2, 5, 6, 9], [1, 2, 3, 29]);
