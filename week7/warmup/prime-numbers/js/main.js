const checkPrimes = {

  numbers: [],
  fillNumbers: function () {
    // for (let i = 0; i < 10; i++) {
    //   this.numbers.push(Math.floor(Math.random()*100 + 1));
    // }
    for (let i = 1; i <= 100; i++) {
      this.numbers.push(i);
    }
  },
  checkNumber: function() {
    this.numbers.forEach(x => {
      for (let i = x - 1; i > 1; i--) {
        if (x % i === 0) {
          // console.log(`Number ${x} divisible by: ${i}`);
          this.numbers.splice(this.numbers.indexOf(x), 1, '');
        }
      }
    });
    this.numbers = this.numbers.filter(x => Number.isInteger(x));

    console.log(`Primes: ${this.numbers}`);
  }
};

console.log('Primes', 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67);
checkPrimes.fillNumbers();
console.log(checkPrimes.numbers);
checkPrimes.checkNumber();


const seive = {
  list: [],
  primes: [],
  calcPrime: function(max) {
    this.list = new Array(max).fill(true);

    // Initially, we use i < max but if we use j = Math.pow(currentNum, 2)
    // in the inner loop then there's no need to iterate until max
    // For example, if your max was 100, there's no need to interate past 10,
    // becuase the 10^2 is 100 and your inner loop won't run because j(100) is NOT < max(100)
    // Square root is a number times itself so sqrt 16 is 4
    for (let i = 2; i < Math.sqrt(max); i++) {

      let currentNum = i;
      // Initially, we started with j = currentNUm + 1
      // BUT we can actually start at the square of currentNum
      // For example, when we look at 3, 6 is ready FALSE because
      // it is a multiple of 2, therefore we can start from 9 (which is the square of 3)

      for (let j = Math.pow(currentNum, 2); j < max; j++) {
      // for (let j = currentNum + 1; j < max; j++) {
        if (this.list[j] === true && j % currentNum === 0) {
          this.list[j] = false;
        }
      }  // innerLoop
    }  // outerLoop

    // arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])
    // array is the empty array we're producing, confusing as we're actually reducing down to a single array
    // elem is the value at this.list[index]
    // index is the index we're up to
    this.primes = this.list.reduce(function(array, elem, index) {
      if (index > 1 && elem === true) {
        array.push(index);
      }
      return array;
    }, []);
    return this.primes;
  }
}  // end of seive

console.log(seive.calcPrime(50));
