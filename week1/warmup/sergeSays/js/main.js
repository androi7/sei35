// const optionsForSerge = [['ask', 'Sure.'], ['yell', 'Woah, chill out!'], ['address', 'Fine. Be that way!'], ['random', 'Whatever.']];
//
// const responseSerge = function(serge) {
//   let index = null;
//   for (let i = 0; i < optionsForSerge.length; i++) {
//     if (optionsForSerge[i][0] === serge) {
//       index = i;
//     }
//   }
//   return optionsForSerge[index][1];
// };
//
//
// for (let i = 0; i < optionsForSerge.length; i++) {
//   console.log(responseSerge(optionsForSerge[i][0]));
// }


const responseSerge = function(option) {
  if (option === undefined || option.length === 0){ 
    return 'Fine. Be that way!';
  } else if (option === option.toUpperCase()) {
    return 'Woah, chill out!';
  } else if (option.endsWith('?'))  {
    return 'Sure.';
  } else {
    return 'Whatever!';
  }
};

console.log(responseSerge('Hello?'));
console.log(responseSerge('HELLOOO'));
console.log(responseSerge());
console.log(responseSerge(''));
console.log(responseSerge('Blahhhhh'));
