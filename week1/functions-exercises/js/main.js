// Fortune Teller
const tellFortune = function(numberOfChildren, partnersName, geographicLocation, job) {
  return `You will be a ${job} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;
};

const fortune1 = tellFortune(3, 'Anna', 'Sydney', 'Developer');
const fortune2 = tellFortune(4, 'Bella', 'Melbourne', 'Engineer');
const fortune3 = tellFortune(2, 'Katy', 'Darwin', 'Accountant');

console.log(`${fortune1}\n${fortune2}\n${fortune3}`);


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
const calcCircumfrence = function(radius) {
  return Number(2 * Math.PI * radius).toFixed(2);
};

const calcArea = function(radius) {
  return Number(Math.pow(radius, 2) * Math.PI).toFixed(2);
};

const circumference = calcCircumfrence(5);
const area = calcArea(5);

console.log(`The circumference of the circle is ${circumference}.`);
console.log(`The area is ${area}.`);


// The Temperature Converter
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
