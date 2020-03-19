let chessboard = new Array(64).fill('');
chessboard = chessboard.map((val, ind) => [`Square ${ind + 1}: ${2 ** ind}`, 2**ind]);

console.log(chessboard);

const grainsOnSquare = field => chessboard[field - 1][0];
console.log('Grains on field 1:', grainsOnSquare(1));
console.log('Grains on field 5:', grainsOnSquare(5));

const totalGrains = () => chessboard.map(x => x[1]).reduce((acc, next) => acc + next);
console.log('Total number of grains is:', totalGrains());

$(document).ready(() => {
  $('form').on('submit', () => {
    console.log('yes');
    const input = $('#field').val();
    console.log(input);
    if (input === 'total') {
      $('#grains').text(totalGrains());
    } else {
      $('#grains').text(grainsOnSquare(input));
    }

  });
});


const grains = {

  squareMax : 64,
  grainsInSquare: function(number) {
    return 2 ** (number - 1)
  },
  grainsOnBoard: function() {
    for (let i = 1; i <= this.squareMax; i++) {
      console.log(`Square ${i}: ${this.grainsInSquare(i)} grains.`);
    }
  },
  totalGrainsOnBoard: function() {
    // imperative
    let total = 0;
    for (let i = 1; i <= this.squareMax; i++) {
      total += this.grainsInSquare(i);
    }
    // return 2**64 - 1
    return `Total grains on board: ${total}`;

    // declarative
    // const total = Array(this.squareMax) // generates array with 64Xempty
    //               .fill(0)  // filling array with zeros, as map doesn't work on empty
    //               .map((elem, i) => this.grainsInSquare(i+1))
    //               .reduce((runningTotal, current) => runningTotal + current);
  }

};

console.log(grains.totalGrainsOnBoard());
