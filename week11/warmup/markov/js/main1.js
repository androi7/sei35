const poem = `
The dogs are running.
The dogs are happy.
The owner are drunk.
No dogs survived.
`;


// 1. Get the bible Data
// 2. createMarkov Table
// 3. Generate Markov Text

const sentenceStarterWords = [];

const createMarkovTable = text => {

  const table = {};
  let words = text.split(/[;\-\n]+/);

  console.log(words);

  words = words.filter( word => word.length > 0 );

  for (let i = 0; i < words.length - 1; i++) {
    const currentWord = words[i];

    // Check if the current word is not already in the table
    if (!(currentWord in table)) {
      table[currentWord] = [];
    }

    const nextWord = words[i + 1];
    table[currentWord].push(nextWord);

    // if the start of the string a-z
    if (currentWord.match(/^[A-Z][a-z]/)) {
      sentenceStarterWords.push( currentWord );
    }

  } // end of for each word

  return table;
} // createMarkovTable()

const getRandomArrayElement = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const generateMarkovText = (table, outputLength) => {
  let currentWord = getRandomArrayElement( sentenceStarterWords );
  let output = currentWord; // This is the first word we've chosen

  for (let i = 0; i < outputLength; i++) {
    currentWord = getRandomArrayElement( table[currentWord] );

    output += " " + currentWord;
  }

  return output;
} // generateMarkovText()

$.ajax('/textfile.txt')
.done( data => {
  console.log(data.length);
  const markovTable = createMarkovTable(data);

  window.markov = markovTable;
  const newText = generateMarkovText(markovTable, 40);
  console.log(`%c${newText}`, 'font-size: 12pt; font-weight: bold');
})

createMarkovTable( poem );
