const happyNumber = {
  happyList: [],
  findSquaresum: function(digit) {
    let sum = 0;
    let stringNumber = digit.toString();

    for (let i = 0; i < stringNumber.length; i++) {
      sum += +stringNumber[i] * +stringNumber[i]  // + ignores preceding zeros?
    }

    return sum
  },

  happyLogic: function(digit) {
    let cycle = {};
    let squareSum = digit;

    while(true) {
      squareSum = this.findSquaresum(squareSum);

      if (squareSum === 1) {
        // console.log('found happy number', digit);
        return true;
      }

      if (cycle[squareSum]) {
        // console.log('repeated number', digit);
        return false;
      }

      cycle[squareSum] = true;
      // console.log('cycle', cycle);
      // console.log('squareSum', squareSum);
    }
  },

  printNumbers: function(num) {
    let found = 0;
    for (let i = 0; found < num; i++) {
      if (this.happyLogic(i)) {
        found++;
        this.happyList.push(i);
      }
    }
    console.log(this.happyList);
  }

}  // end of happyNumber

happyNumbers.printNumbers(10);
