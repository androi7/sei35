const presidents = ['Ronald Reagan', 'Jimmy Carter', 'Richard Nixon', 'John F. Kennedy', 'George Washington'];

// for (let i = 0; i < presidents.length; i++) {
//   console.log(`My #${i+1} choice is ${presidents[i]}`);
//   let suffix = '';
//   if (i === 0) {
//     suffix = 'st';
//   } else if (i === 1) {
//     suffix = 'nd';
//   } else if (i === 2) {
//     suffix = 'rd';
//   } else {
//     suffix = 'th';
//   }
//   console.log(`My ${i+1}${suffix} choice is ${presidents[i]}`);
// }
//
// for (let item in presidents) {
//   console.log(`For/in - Loop: My #${parseInt(item)+1} choice is ${presidents[item]}. (index: ${item})`);
// }
//
// for (let item of presidents)  {
//   console.log(`For/of - Loop: index: ${item}`);
// }

// const suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];
// for(let i = 0; i < presidents.length; i++) {
//   const currentPresident = presidents[i];
//   console.log(`My ${i+1}${suffixes[i]} is the ${currentPresident}.`);
// }

const get = function(index) {
  let suffix = '';
  if (index === 10 || index === 11 || index === 12) {
    return suffix = 'th';
  } else if (index % 10 === 0) {
    return suffix = 'st';
  } else if (index % 10 === 1) {
    return suffix = 'nd';
  } else if (index % 10 === 2) {
    return suffix = 'rd';
  } else {
    return suffix = 'th';
  }
};

for (let i = 0; i < presidents.length; i++) {
  console.log(`My ${i+1}${get(i)} choice is ${presidents[i]}`); // ${suffixes[i]}
}
