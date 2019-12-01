/***** Raindrops *****/
const raindrops = function (num) {
  let output = '';
  if (num % 3 === 0) {
    output += 'Pling';
  }
  if (num % 5 === 0) {
    output += 'Plang';
  }
  if (num % 7 === 0) {
    output += 'Plong';
  }
  if (!(num % 3 === 0 || num % 5 === 0 || num % 7 === 0)) { // if (output.length === 0)
    output = num.toString();
  }
  return output;
};

console.log(raindrops(28));
console.log(raindrops(1755));
console.log(raindrops(34));
