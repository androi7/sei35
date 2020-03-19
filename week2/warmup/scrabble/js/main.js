
const scrabble = {
  score: 0,
  randomLetterBonus: function(odd) {
    return Math.random() > odd;
  },
  doubleLetterBonus: function() {
    return this.randomLetterBonus(0.8) ? 2 : 0;
  },
  trippleLetterBonus: function() {
    return this.randomLetterBonus(0.9) ? 3 : 0;
  },
  getScore: function(word) {
    this.score = 0;
    let factorBonus = 1;
    for(let letter of word) {
      factorBonus = this.trippleLetterBonus() || this.doubleLetterBonus() || 1;
      letter = letter.toUpperCase();
      if (['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'].includes(letter)) {
        this.score += factorBonus;
      } else if (['D', 'G'].includes(letter)) {
        this.score += 2 * factorBonus;
      } else if ('BCMP'.split('').includes(letter)) { //(['B', 'C', 'M', 'P'].includes(letter))
        this.score += 3 * factorBonus;
      } else if (['F', 'H', 'V', 'W', 'Y'].includes(letter)) {
        this.score += 4 * factorBonus;
      } else if (letter === 'K') {
        this.score += 5 * factorBonus;
      } else if (['J', 'X'].includes(letter)) {
        this.score += 8 * factorBonus;
      } else if (['Q', 'Z'].includes(letter)) {
        this.score += 10 * factorBonus;
      } else {
        console.log('letter not found');
      }

    }
  },
  printScore: function() {
    console.log(`Your score: ${this.score}`);
    return this.score;
  }
};

const input = prompt('Type in a word');
scrabble.getScore(input);
scrabble.printScore();
