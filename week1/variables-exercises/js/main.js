// Fortune Teller
const childrenAmount = 5;
const partnerName = 'Anna';
const myLocation = 'Sydney';
const job = 'Developer';

const fortuneTeller = `You will be a ${job} in ${myLocation}, and married to ${partnerName} with ${childrenAmount} kids.`

console.log(fortuneTeller);

/****** Age Calculator ***********/
const currentYear = 2019;
const birthYear = 1987;

let age = currentYear - birthYear;

const ageOutput = `They are either ${age} or ${age-1}.`;

console.log(ageOutput);


// Lifetime Supply Calculator
const myAge = 31;
const maxAge = 80;
const amountPerDay = 1.5;

const totalSnacks = (maxAge - myAge) * 365 * amountPerDay;

console.log(`You will need ${totalSnacks} to last you until the ripe old age of ${maxAge}.`);


// The Geometrizer
const radius = 5;
let circumference = 2 * Math.PI * radius;
let area = Math.pow(radius, 2) * Math.PI;

console.log(`The circumference is ${circumference.toFixed(2)}.`);
console.log(`The area is ${area.toFixed(2)}.`);


// The Temperature Converter
const tempCelsius = 38;
const tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log(`${tempCelsius}\u00B0C is ${tempFahrenheit}\u00B0F`);
console.log(`${tempFahrenheit}\u00B0F is ${(tempFahrenheit - 32)*5/9}\u00B0C`);
