const isIsogram = word => {
  const copyWordArr = [];
  console.log(word);
  const wordArr = word.toLowerCase().split('');
  for (const char of wordArr) {
    if (!copyWordArr.includes(char)) {
      copyWordArr.push(char);
    } else {
      return false;
    }
  }
  return true;
};


console.log('Dermatoglyphics', isIsogram("Dermatoglyphics")); //, true );
console.log('isogram', isIsogram("isogram")); //, true );
console.log('aba', isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log('moOse', isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log('isIsogram',isIsogram("isIsogram")); //, false );
