console.log('hello world');

const sayHello = function() {
  console.log('Hello from inside sayHello()!');
};

// const x = 3;

const runNicely = function(functionToRun) {
  console.log('Hi I am excited to run your function for you! hahahaha');
  functionToRun(); // Run the
  console.log('It was so rewarding to run your function! I hope to do it again soon!');
};


// runNicely(sayHello);

// Pre-jQuery way to run code only when DOM is loaded
window.onload = sayHello;

const arr = ['one', 'two', 'three', 'four'];

const each = function(arrayToLoopOver, functionToRun) {
  for(let i = 0; i < arrayToLoopOver.length; i++) {
    // Inside the loop which lets us access each element in the array
    // (the first argument), run the function that was passed in as
    // the second argument - and when we run that function, pass in to
    // it the current element from the array, for it to do whatever
    // wants with.
    functionToRun(arrayToLoopOver[i], i);
  }
  // arrayToLoopOver.forEach(functionToRun);
};

// Usage:
each(arr, function(item, index) {
  if (index % 2 === 0) {
    console.log('even', index, item);
  }  else {
    console.log('odd', index, item);
  }

});

each(arr, console.log);
each(arr, sayHello);

// ruby:
// arr.each_with_index do |elem, i|
//   puts i, elem
// end

arr.forEach(function(item, index, arrayItself) {
  console.log(index, item, arrayItself);
});
