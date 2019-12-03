const scrabble = {
  letterScores: {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: 'BCMP'.split(''),
    4: 'FHVMY'.split(''),
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z'],
  },
  getWordScore: function(word) {
    word = word.toUpperCase();
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      const currentLetter = word[i];

      for (let key in this.letterScores ) {
        if (this.letterScores[key].includes(currentLetter)) {
          score += parseInt(key);
        }
      }
    }
    
    return score;
  }
}


console.log(scrabble.getWordScore('cabbage'));
