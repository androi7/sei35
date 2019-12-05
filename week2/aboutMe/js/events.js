console.log('Events');


// Define the function
// Functions live inside variables, in JS!
// They are 'first-class'

const addTwo = function(num) {
  console.log('Inside addTow()');
  const result = num + 2;

  // return undefined; // the default
  return result;
};


// Run the function
//const returnValue = addTwo(6);
//console.log(returnValue);

const sayHello = function() {
  console.log('Hello world!');
};

//sayHello();


// Run another function for us, nicely
// This function takes ANOTHER FUNCTION as its argument!
const runNicely = function(functionToRunNicely) {
  console.log('Hello, I am about to run your function for you! I hope that is to your liking, sir/madam!');

  functionToRunNicely(); // Run the function that was passed in

  console.log('I hope that went well for you! It was a real pleasure for me, and have a nice day.');
};

// Pass in the *definition* of the function
// runNicely(sayHello);

// Anonymous function!
// We define it at the very point of passing it as an argument to runNicely()
// This is basically a callback!
runNicely(function() {
  console.log('Screw you, runNicely!');
});


const h1 = document.querySelector('h1');

// console.log(h1);

// Run some code in response to click events on the h1 element
h1.addEventListener('click', function(e) {
  console.log('The H1 was clicked!');
  console.log(e.screenX, e.screenY);
});

// when removing EventListener then not using anonymous function
// h1.removeEventListener()

// Run some code in response to click events anywhere in the document
document.addEventListener('click', function(e) {
  console.log(e.target);
  console.log(e.screenX, e.screenY);
});

/*
setTimeout(function() {
  console.log('Surprise!');
}, 2000);

setTimeout(function() {
  console.log('Surprise!');
}, 5000);
*/
