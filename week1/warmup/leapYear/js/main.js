/***** Leap Years *****/
const isLeapYear = function(year) {
  if (year % 4 === 0 && (!(year % 100 === 0) || year % 400 === 0)) {
    return true;
  }
  return false;
};

let userInput = '';
while(userInput !== null) {
  userInput = prompt('Which number do you want to test?');
  if (userInput !== null) {
    console.log(isLeapYear(userInput));
  }

}

console.log('1997', isLeapYear(1997));
console.log('1996', isLeapYear(1996));
console.log('1900', isLeapYear(1900));
console.log('2000', isLeapYear(2000));
