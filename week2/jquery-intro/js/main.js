// Ask the DOM to give us the element we want to change
const billImage = document.getElementById('firstBill');

// Change something about the element -
// it looks the same as changing the value of an object's key
// (because that's exactly what is happening)
// billImage.src = 'http://placebear.com/300/300';

const $billImage = $('#firstBill');
console.log($billImage);

// Calling attr with one argument means GET the current value of this attribute
console.log('current src:', $billImage.attr('src'));

// Calling attr() with two arguments means SET this attribute to THAT value
$billImage.attr('src', 'http://placebear.com/300/300');

// const bestDogItem = document.getElementById('bestDog');
// console.log( 'best dog:', bestDogItem );
//
// // Change the *contents* of this tag (the stuff inside the tags)
// bestDogItem.innerHTML = 'Ruby';

const $bestDogItem = $('#bestDog');

const dogText = $bestDogItem.html(); // This is the getter!
console.log('Best dog text:', dogText);

$bestDogItem.html('<strong>Ruby</strong>'); // This is the setter!

// This only gives us the contents of the FIRST matching element
console.log( $('p').html() );


// If we want to print them all, we can loop through each element
// by passing a function to the each() method
$('p').each(function() {
  // The special variable 'this' will contain the current element,
  // as we iterate through all of them
  const contents = $(this).html();
  // console.log(contents);
});


// This is a normal function:
const sayHello = function(name) {
  console.log('Hello world!', name);
};

// This is an anonymous function, defined on-the-fly as we pass it to setTimeout
// window.setTimeout( function() {
//   // sayHello('Malik'); // call our function with a specific arg, after 1 second
//   const sum = 10 + 20;
//   console.log(sum);
// }, 1000);

// This works, but our function gets called without any arguments - so
// the argument we asked for as 'name' in sayHello ends up being undefined
// window.setTimeout(sayHello, 2000);

// jQuery event handling!
console.log($('#firstBill'));

// Using a pre-existing function with its own name
$('#firstBill').on('click', sayHello); // event object will passed in as argument for sayHello

// Using an anonymous function
$('#firstBill').on('click', function( event ) {
  console.log('Hello from anonymous function!');
  console.log('The event object is:', event);
});

$('p').on('mouseenter', function() {
  // Do something whenever the mouse crosses the border into a <p> tag's box

  // Get the HTML contents (innerHTML) of whichever p tag is actually being hovered over
  // 'this' refers to the p tag that the event happened to
  // (because this function has been attached to ALL the <p> tags)
  // We need to wrap 'this' in the jQuery function, because it is a vanilla DOM node
  // by default, and we want it to be a jQuery node so we can call jQuery methods on it
  const content = $(this).html();

  console.log('contents:', content);

  console.log(event.target.innerHTML); // Oldskool way - requires the function to have an arg
});

// get all paragraph tags and print their CONTENTS
// const pTags = document.getElementsByTagName( 'p' );
// const pTags = document.querySelectorAll('p');
//const pTags = document.querySelectorAll('li.special');



// Because getElementsByTagName() returns an array-like thing,
// we can use a for loop to do something with each <p> tag
// for( let i = 0; i < pTags.length; i++ ) {
//   const p = pTags[i];
//   //console.log( p.innerHTML ); // with html tags
//   // console.log( p.innerText ); // proper text
//   p.innerHTML += '<strong>HAXXOORREDD!!</strong>'; // change each p tag's content!
//
//   p.style.backgroundColor = 'darkgoldenrod';
//
//   // Create a brand new DOM node (currently detached from page, just in JS memory)
//   const newBillImage = document.createElement('img');
//
//   // Set some attributes of the object
//   newBillImage.src = 'http://www.fillmurray.com/400/400';
//   newBillImage.style.border = '10px solid lavender';
//
//   // Actually attach our new detached DOM node to the DOM (making it visible)
//   //document.body.appendChild(newBillImage);
//   p.appendChild(newBillImage);
// }
