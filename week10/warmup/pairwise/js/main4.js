const pairwise = (arr, sum) => {

  const result = arr.reduce((acc, cur, index) => {
    let theOtherElement = sum - cur;

    if (arr.indexOf(theOtherElement) !== -1 && arr.indexOf(theOtherElement) !== index) {
      console.log('index', index);
      console.log('index complement', arr.indexOf(theOtherElement));
      let total = index + arr.indexOf(theOtherElement);
      arr.splice(index, 1, NaN);
      arr.splice(arr.indexOf(theOtherElement), 1, NaN);

      return acc + total;  // update the acc
    }

    return acc;
  }, 0);  // initial acc value is 0

  return result;
};


console.log(pairwise([7,9,11,13,15], 20));  // 6
console.log(pairwise([7,5,11,5,15], 10));  // 4
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));  // 11
