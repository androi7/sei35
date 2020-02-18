const markov = {
  text: "Creating the works from public domain print editions means that no one owns a United States copyright in these works, so the Foundation (and you!) can copy and distribute it in the United States without permission and without paying copyright royalties.  Special rules, set forth in the General Terms of Use part of this license, apply to copying and distributing Project Gutenberg-tm electronic works to protect the PROJECT GUTENBERG-tm concept and trademark.",
  table: {},
  randomText: '',
  startingWord: '',
  getText(id) {
    axios.get(`http://www.gutenberg.org/cache/epub/${id}/pg${id}.txt`,
      {
  	headers: {
  	  'Access-Control-Allow-Origin': '*',
  	},
  	proxy: {
  	  host: '58.153.112.168',
  	  port: 8118
  	}
  	})
      .then(res => this.text = res.data)
      .catch(err => console.error(err));
  },
  createList(id) {
    //this.getText(id);
    textArray = this.text.split(' ');
    for (let i = 0; i < textArray.length; i++) {
      if (!this.table.hasOwnProperty(textArray[i])) {
        this.table[textArray[i]] = [textArray[i+1]];
      } else {
        this.table[textArray[i]].push(textArray[i+1]);
      }
    }
    console.log('text:', this.text);
    console.log('table:',this.table);
    this.generateText();
  },
  generateText() {
    this.startingWord = this.text.split(' ')[Math.floor(Math.random()*this.text.split(' ').length)];
    const randomLength = 60 + Math.floor(Math.random()*41);
    let currentWord = this.startingWord;
    this.randomText = currentWord
    console.log('currentWord', currentWord);
    console.log('word in table:', this.table[currentWord]);
    console.log(Math.floor(Math.random()*this.table[currentWord].length));
    for (let i = 0; i < randomLength; i++) {
      //console.log(Math.floor(Math.random()*this.table[currentWord].length));
      currentWord = this.table[currentWord][Math.floor(Math.random()*this.table[currentWord].length)];
      this.randomText += ` ${currentWord}`;
    }
    console.log('newText:', this.randomText);
  }
}


markov.createList(25525);
