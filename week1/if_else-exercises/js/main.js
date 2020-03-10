/***** Bigger Number *****/
const greaterNum = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

console.log(`The greater number of 5 and 10 is ${greaterNum(5,10)}`);
console.log(`The greater number of 8 and 3 is ${greaterNum(8,3)}`);


/* ## The World Translator
Write a function named helloWorld that:
- takes 1 argument, a language code (e.g. "es", "de", "en")
- returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.
*/
const helloWorld = function (lang = 'en') {
  if (lang === 'en') {
    return "Hello, World";
  } else if (lang === 'de') {
    return "Hallo Welt";
  } else if (lang === 'es') {
    return "Hola Mundo";
  } else {
    return "Something went wrong!";
  }
};

console.log(helloWorld());
console.log(helloWorld('en'));
console.log(helloWorld('de'));
console.log(helloWorld('es'));
console.log(helloWorld(1));


/***** The Grade Assigner *****/
const assignGrade = function (score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(`You achieved 72 points that means grade ${assignGrade(72)}`);
console.log(`You achieved 94 points that means grade ${assignGrade(94)}`);
console.log(`You achieved 55 points that means grade ${assignGrade(55)}`);


/* ## The Pluralizer
Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".
- Call that function for a few different scores and log the result to make sure it works.
*/
const pluralize = function (noun, number) {
  const message = `${ number } ${ noun }`;
  if (1 === number) {
    return message;
  } else {
    return message + 's';
  }
};

console.log( pluralize('cat', 5) );
console.log( pluralize('dog', 1) );
console.log( pluralize('turtle', 0) );
