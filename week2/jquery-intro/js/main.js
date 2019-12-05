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
  // as we iterate through 
  const contents = $(this).html();
  console.log(contents);
});

// get all paragraph tags and print their CONTENTS
const pTags = document.getElementsByTagName( 'p' );
// const pTags = document.querySelectorAll('p');
//const pTags = document.querySelectorAll('li.special');




// Because getElementsByTagName() returns an array-like thing,
// we can use a for loop to do something with each <p> tag
for( let i = 0; i < pTags.length; i++ ) {
  const p = pTags[i];
  //console.log( p.innerHTML ); // with html tags
  // console.log( p.innerText ); // proper text
  p.innerHTML += '<strong>HAXXOORREDD!!</strong>'; // change each p tag's content!

  p.style.backgroundColor = 'darkgoldenrod';

  // Create a brand new DOM node (currently detached from page, just in JS memory)
  const newBillImage = document.createElement('img');

  // Set some attributes of the object
  newBillImage.src = 'http://www.fillmurray.com/400/400';
  newBillImage.style.border = '10px solid lavender';

  // Actually attach our new detached DOM node to the DOM (making it visible)
  //document.body.appendChild(newBillImage);
  p.appendChild(newBillImage);
}
