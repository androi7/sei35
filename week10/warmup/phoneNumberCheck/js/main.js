const phoneNumber = {
  phoneNumber: '',
  invalidNumber: '00000000',
  checkNumber(num) {
    this.phoneNumber = parseInt(num).toString();
    if (this.phoneNumber.length === 11) {
      if (this.phoneNumber[0] === '1') {
        this.phoneNumber = this.phoneNumber.substr(1);
        return this.phoneNumber;
      }
      else {
        return this.invalidNumber;
      }
    } else if (this.phoneNumber.length === 10) {
      return this.phoneNumber;
    } else {
      return this.invalidNumber;
    }
  },

  outputText(numUnchecked, numChecked) {
    console.log(`Input: ${numUnchecked}\nOutput: (${numChecked.substr(0, 3)}) ${numChecked.substr(3,3)}-${numChecked.substr(6)}`);
  },

  formatNumber(num) {
    this.outputText(num, this.checkNumber(num));
  }

};


phoneNumber.formatNumber(11234567890);
