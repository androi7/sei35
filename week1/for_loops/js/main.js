
for(let i = 0; i <= 20; i++) {
  let status= 'odd';
  if (i % 2 === 0) {
    status = 'even'; // console.log(`${i} is even`);
  }
  console.log(`${i} is ${status}.`);
}


for(let i = 0; i <= 10; i++) {
  //console.log(`${i} * 9 = ${i*9}`);
  for ( let j = 0; j <= 10; j++) {
    const product = i * j;
    if (product % 10 === 0) {
      console.log(`%c${i} * ${j} = ${product}`, 'color: hotpink; font-size: 10pt; background-color: red;');
    } else {
      console.log(`${i} * ${j} = ${product}`);
    }
  }
}

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


for(let i = 60; i <= 100; i++) {
  console.log(`For ${i}, you got a ${assignGrade(i)}.`);
}
