function isIsogram(str){
 return str.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str.length;
}

console.log('Dermatoglyphics', isIsogram("Dermatoglyphics")); //, true );
console.log('isogram', isIsogram("isogram")); //, true );
console.log('aba', isIsogram("aba")); //, false, "same chars may not be adjacent" );
console.log('moOse', isIsogram("moOse")); //, false, "same chars may not be same case" );
console.log('isIsogram',isIsogram("isIsogram")); //, false );
