// Fortune Teller
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// returns a string that looks like this: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable

const tellFortune = function(numberOfChildren, partnersName, geographicLocation, job) {
  return `You will be a ${job} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
};

const fortune1 = tellFortune(3, 'Anna', 'Sydney', 'Developer');
const fortune2 = tellFortune(4, 'Bella', 'Melbourne', 'Engineer');
const fortune3 = tellFortune(2, 'Katy', 'Darwin', 'Accountant');

console.log(`${fortune1}\n${fortune2}\n${fortune3}`);

// const test = function() {
//   console.log(`You will be a ${this.job} in ${this.geographicLocation}, and married to ${this.partnersName}.`);
// };
//
// test.apply({job: 'Developer', geographicLocation: 'New Zealand', partnersName: 'Marry'});


/****** The Puppy Age Calculator ***********/


const calculateDogAge = function(age, conversely) {
  if (!conversely) {
    age *= 7;
    return `Your doggie is ${age} years old in dog years.`;
  } else {
    age /= 7;
    return `Your doggie is ${age.toFixed()} years old in human years.`;
  }
};

const puppy1 = calculateDogAge(5);
const puppy2 = calculateDogAge(1);
const puppy3 = calculateDogAge(11);
const puppy4 = calculateDogAge(75, true);

console.log(puppy1);
console.log(puppy2);
console.log(puppy3);
console.log(puppy4);


// Lifetime Supply Calculator
// Write a function named calculateSupply that:
//
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a fixed maximum age).
// returns a string that looks like this: "You will need NN to last you until the ripe old age of X"
// Call that function 3 times with 3 different values for the arguments; each time you call the function, capture the return value of the function (the string) in a new variable, and on a new line, print out the contents of the variable
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function(age, amountPerDay) {
  const maxAge = 80;
  const totalSnacks = (maxAge - age) * 365 * amountPerDay;
  return `You will need ${totalSnacks} to last you until the ripe old age of ${maxAge}.`;
};

const age1 = calculateSupply(15, 4);
const age2 = calculateSupply(25, 3);
const age3 = calculateSupply(30, 7);

console.log(age1);
console.log(age2);
console.log(age3);


// The Geometrizer
// Create a function called calcCircumference:
//
// Pass the radius to the function.
// Calculate the circumference based on the radius, and return this value from the function (as a number, not a string).
// Call the function with a radius argument of your choice, capture the return value in a variable, and use the variable to print out a string like: "The circumference of the circle is XX."
// Create a function called calcArea:
//
// Pass the radius to the function.
// Calculate the area based on the radius, and return this number from the function.
// Call the function with a radius argument, capture its return value in a variable, and use the variable to output to the consle "The area is NN".

const calcCircumference = function(radius) {
  return Number(2 * Math.PI * radius).toFixed(2);
};

const calcArea = function(radius) {
  return Number(Math.pow(radius, 2) * Math.PI).toFixed(2);
};

const circumference = calcCircumference(5);
const area = calcArea(5);

console.log(`The circumference of the circle is ${circumference}.`);
console.log(`The area is ${area}.`);


// The Temperature Converter
// Create a function called celsiusToFahrenheit which:
//
// Takes a celsius temperature as its argument.
//
// Converts it to fahrenheit and returns this value from the function
//
// Call the funtion this way:
//
// Create a variable called celsius and store a temperature value in it
// Call the celsiusToFahrenheit function and pass the celsius variable as the argument.
// Capture the return value of the function into a new variable, and use both this variable and your original celsius input variable to print out a result like "XX°C is YY°F".
// Now do the reverse calculation by creating a function called fahrenheitToCelsius. Pass a variable called fahrenheit into this function when you call it.
//
// BONUS: prompt the user for the temperatures to convert, instead of hardcoding them into variables.

const celsiusToFahrenheit = function(celsius) {
  const tempFahrenheit = (celsius * 9/5) + 32;
  return tempFahrenheit;
};

const fahrenheitToCelsius = function(fahrenheit) {
  return ((fahrenheit - 32)*5/9).toFixed(2);
};

const celsius = 38;
const newTempFahrenheit = celsiusToFahrenheit(celsius);

const fahrenheit = 116;
const newTempCelsius = fahrenheitToCelsius(fahrenheit);

console.log(`${celsius}\u00B0C is ${newTempFahrenheit}\u00B0F`); //otherwise use meta tag and set charset="UTF-8"
console.log(`${fahrenheit}\u00B0F is ${newTempCelsius}\u00B0C`);
