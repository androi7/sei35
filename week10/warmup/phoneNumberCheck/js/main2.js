const phoneNumberCheck = {
  cleanNumber: function(num) {
    let cleaned = [];
    let numerals = "0123456789";

    for (let i = 0; i < num.length; i++) {
      let currentNum = num[i];

      // if (numerals.indexOf(currentNum) !== -1) {
      if (numerals.includes(currentNum)) {
        cleaned.push(currentNum)
      }
    }

    cleaned = cleaned.join('');
    return cleaned;
  },

  isValid: function(num) {
    let cleanNumber = this.cleanNumber(num);

    if (cleanNumber.length === 11 && cleanNumber[0] === '1') {
      return cleanNumber.substr(1);
    } else if (cleanNumber.length === 10) {
      return cleanNumber
    } else {
      return "0000000000";
    }
  },

  getFormattedNumber: function(num) {
    const validNumber = this.isValid(num);
    const areaCode = validNumber.substr(0, 3);
    const exchangeCode = validNumber.substr(3,3);
    const remaining = validNumber.substr(6);
    return `(${areaCode}) ${exchangeCode}-${remaining}`;
  }
}

console.log('Valid Numbers?');

console.log(phoneNumberCheck.isValid('11234567898'));
console.log(phoneNumberCheck.isValid('112345jhwo678er9qw8'));
console.log(phoneNumberCheck.isValid('89234567898'));
console.log(phoneNumberCheck.isValid('567898'));

console.log('Formatted numbers ~~~~~~~~~~~~~~~~~');

console.log(phoneNumberCheck.getFormattedNumber('11234567898'));
console.log(phoneNumberCheck.getFormattedNumber('567898'));


function phonenumber(inputtxt){
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.match(phoneno)){
      return true;
    }else{
      return false;
  }
}

console.log(phonenumber('(123) 456-7898'));
