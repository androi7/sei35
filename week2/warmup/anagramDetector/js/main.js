const word = 'listen';
const anagramArray = ["enlists", "google", "inlets", "banana", 'netsil'];

const detector = {
  anagramList: [],
  anagramDetector: function(word, list) {
    for (let elem of anagramArray) {
      let newElem = elem.toLowerCase().split('');
      for (let letter of word) {
        if (newElem.includes(letter.toLowerCase())) {
          newElem.splice(newElem.indexOf(letter), 1);
        } else {
          break;
        }
      }
      newElem.length === 0 ? this.anagramList.push(elem) : null;
    }
    return this.anagramList;
  }
};

console.log(detector.anagramDetector(word, anagramArray));
