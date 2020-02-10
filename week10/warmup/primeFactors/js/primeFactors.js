const primeFactors = {
  primeFactors: [],
  getPrimeFactors: function(num) {
    while (num % 2 === 0) {
      this.primeFactors.push(2);
      num /= 2;
    }

    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i++) {
      while (num % i === 0) {
        this.primeFactors.push(i);
        num /= i;
      }
    }
    if ( num > 2) {
      this.primeFactors.push(num)
    }
    return this.primeFactors;
  },
  resetResult: function() {
    this.primeFactors.length = 0;
  }
};

console.log(primeFactors.getPrimeFactors(10)); // [2, 5]
primeFactors.resetResult();
console.log(primeFactors.getPrimeFactors(60)); // [2,2,3,5]
