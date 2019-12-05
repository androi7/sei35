const anagramDetector = {
  anagram: [],
  customSort: function(unsortedWord) {
    return unsortedWord.toLowerCase().split('').sort().join("");
  },

  findMatch: function(word, array) {
    let wordOne = this.customSort(word);

    for (let i = 0; i < array.length; i++) {
      let wordTwo = this.customSort(array[i]);

      if (wordOne === wordTwo) {
        this.anagram.push(array[i]);
      }
    }

    return `The anagram of ${word} is ${this.anagram}`;
  },


};

console.log(anagramDetector.findMatch('listen', ['enlists', 'google', 'inlets', 'banana', 'netsil']));
