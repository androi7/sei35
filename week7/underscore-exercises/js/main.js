const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

const people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

console.log('original numbers:', numbers);

// Iterate through numbers and log each number to the console
_(numbers).each(num => console.log(num));

// Iterate through numbers and multiply each one of them by 5
const numsMultiplyByFive = _(numbers).map(num => num * 5);
console.log('Numbers multiplied by 5:', numsMultiplyByFive);

// Iterate through numbers and reduce it by adding them together
const sum = _(numbers).reduce((acc, current) => acc + current);
console.log('sum:', sum);

// Get an array of all of the people in people that have the username "E"
const namesWithE = _(people).where({username: "E"});
// _(people).filter( p => p.username === 'E');
console.log('People with username E:', namesWithE);

// Find the first object in people that has the id of 3
const personId3 = _(people).findWhere({id: 3});
const es6IdThree = people.find( p => p.id === 3);
console.log('Person with id 3:', personId3, es6IdThree);

// Find the first person who has an age of less than 50
const lessThenFifty = _(people).find(p => p.age < 50);
const es6lessThanFifty = people.find(p => p.age < 50);
console.log('First person with age 50', lessThenFifty, es6lessThanFifty);


// Get an array of all of the people with an age of over 60
const peopleOver60 = _(people).filter(item => item.age > 60);
const es6peopleOver60 = people.filter(p => p.age > 60);
console.log('People over 60', peopleOver60, es6peopleOver60);

// Remove all of the people with an age less than 40
const peopleOver40 = _(people).reject(item => item.age < 40)
console.log('People over 40', peopleOver40);

// Remember!
