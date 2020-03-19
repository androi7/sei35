const word = 'listen';
const anagramArray = ["enlists", "google", "inlets", "banana", 'netsil'];

const detector = {
  anagramList: [],
  anagramDetector: function(word, list=anagramArray) {
    this.anagramList.length = 0;
    for (let elem of list) {
      let newElem = elem.toLowerCase().split('');
      for (let letter of word) {
        if (newElem.includes(letter.toLowerCase())) {
          newElem.splice(newElem.indexOf(letter), 1);
        } else {
          break;
        }
      }
      newElem.length === 0 && this.anagramList.push(elem);
    }
    return this.anagramList;
  }
};

console.log(detector.anagramDetector(word, anagramArray));
