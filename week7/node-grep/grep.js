// Use the builtin filesystem package
const fs = require('fs');

// fs.readFile('example.txt', 'utf8',function(err, contents) { // asynchronous
//   if (err) {
//     console.warn(err);
//     return; // early exit, due to error
//   }
//
//   console.log('contents:',contents);
// });

// deconstructuring, first two arguments are irrelavant
const [_, __, filename, searchString] = process.argv;

console.log(filename, searchString);

const contents = fs.readFileSync(filename, 'utf8');  // synchronous

console.log('after reading file');
// console.log('contents:', contents);
const lines = contents
  .split('\n')
  .filter(line => line.toLowerCase().includes(searchString.toLowerCase()))
  .forEach(line => console.log(line));
