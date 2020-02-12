const collatz = {
  currentNum: 0,
  step: 0,
  compute: function(num) {
    if (num == 1) {
      console.log('Finished:', this.currentNum);
      return this.currentNum
    } else {
      this.step++;
      this.currentNum = (num % 2 === 0) ? num/2 : num * 3 + 1;
      console.log(`${this.step}. step, number:`,this.currentNum);
      return this.compute(this.currentNum);
    }

  }
};

collatz.compute(3);
