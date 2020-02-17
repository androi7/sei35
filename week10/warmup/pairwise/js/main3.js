const pairwise = (arr, sum) => {
  // initialise the result variable
  let result = 0;

  // looping for 1st element
  for (let i = 0; i < arr.length; i++) {

    // looping for 2nd element
    for (let j = i+1; j < arr.length; j++) {

      if (arr[i] + arr[j] === sum) {
        result += i + j;  // add indices of values found

        arr[i] = '';  // so it's not reused
        arr[j] = '';  // so it's not reused
      }
    }  // loop j
  }  // loop i

  return result;
}

console.log(pairwise([7,9,11,13,15], 20));  // 6
console.log(pairwise([7,5,11,5,15], 10));  // 4
console.log(pairwise([1, 4, 2, 3, 0, 5], 7));  // 11
