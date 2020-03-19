const isIsogram = word => {

  // let newWord = new Set(word.toLowerCase());
  // return newWord.size === word.length ? true : false;

  return new Set(word.toLowerCase()).size === word.length;
}

console.log('Dermatoglyphics', isIsogram('Dermatoglyphics'));
console.log('isogram', isIsogram("isogram")); //, true );
console.log('aba', isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log('moOse', isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log('isIsogram',isIsogram("isIsogram")); //, false );
