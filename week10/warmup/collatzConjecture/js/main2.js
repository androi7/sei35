const collatz = num => {
  let cycle = 0;
  let arr = [num];

  while (num > 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }

    cycle++;
    arr.push(num);
  }

  console.log(cycle);
  console.log({arr});

};

// collatz(12);
// collatz(27);
// collatz(64);


const collatz_rec = (num, count=0, arr=[num]) => {
  // base case
  if (num === 1) {
    console.log(count);
    console.dir(arr, {maxArrayLength: null});
    return;
  }

  if (num % 2 === 0) {
    num /= 2;
  } else {
    num = num * 3 + 1;
  }
  count++;
  arr.push(num);
  collatz_rec(num, count, arr);
};

collatz_rec(27);
