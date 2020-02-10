const happyNumber = {
  number: '',
  getHappyNumber: function(num) {
    this.number = num.toString().split('');
    console.log(this.number);
    while(!this.number.every(i => i === '1')) {
      this.number = this.number.split('').map(digit => {
        if (digit !== '1') {
          const res = (parseInt(digit)**2);
          this.number = res.toString().split('').reduce((prev, acc) => parseInt(prev) + parseInt(acc)).toString().split('');

        }
      });
    }
    return this.number;
  }
}

console.log(happyNumber.getHappyNumber(7));
