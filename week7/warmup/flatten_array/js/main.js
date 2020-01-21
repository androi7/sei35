const reverse = function(arr) {
  let reversedArray = [];
  for (let i = arr.length-1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
};

console.log(reverse( [1, 2, 3, 4] ));

const flatten = function(arr) {
  let flattenedArray = [];

  const flat = function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flat(arr[i]);
      } else {
        flattenedArray.push(arr[i]);
      }
    }
  };

  flat(arr);
  return flattenedArray;
};

console.log(flatten( ["Hello", ["World", 42],["World", 55, ["World", 32]], ["World", 22]  ] ));


const array1 = ["one", "two", "three", "four"];

// const reverseArray = function(array) {
//   let reverse = [];
//   for (let i = 0; i < array.length; i++) {
//     reverse.unshift(array[i]);
//   }
//   return reverse;
// };

const flattenArray = function(array) {
  //let flatten = [];
  //for (let i = 0; i < array.length; i++) {
    // Solution 1
    // if (array[i] instanceof Array) {
    //   for (let j = 0; j < array[i].length; j++) {
    //     flatten.push(array[i][j])
    //   }
    // } else {
    //   flatten.push(array[i])
    // }

    // Solution 2
    // if (Array.isArray(array[i])) {
    //   flatten = flatten.concat(array[i])
    // } else {
    //   flatten.push(array[i]);
    // }
  //}

  // Solution 3
  console.log('flatten', array.flat(Infinity));
  //console.log('flatten', flatten);
}

flattenArray(["Hello", ["World", 42] ]);
