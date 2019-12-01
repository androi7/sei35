const dict = {

  // The nested object stores our actual words and their definitions,
  // as key-value pairs
  // This stops them getting mixed up with the methods that also live
  // in our main 'dict' object.
  definitions: {
    'method': 'a function which is defined inside an object (i.e. the value of a key)',
    'scope': 'the visibility or lifetime of a variable within a program',
    'variadic function': 'a variadic function is one which accepts a variable number of arguments',
    'immutable': undefined
  },

  lookupWord: function(term) {
    const definition = this.definitions[term]; // use the term to get the definition
    //console.log(`${term}: ${definition}`); // print out both
    // if (this.definitions[term] !== undefined) {
    if (term in this.definitions) {
      // Term is defined
      console.log(`${term}: ${definition}`);
    } else {
      // Term is not defined in the dictionary
      console.log(`Sorry, '${term}' is not defined in the dictionary.`);
    }
  },

  printAllDefinitions: function() {
    let totalEntries = 0;
    // Loop through all the keys of the definitions object, and print each
    for(const key in this.definitions) {
      //console.log(key);
      this.lookupWord(key);
      totalEntries++;
    }

    console.log(`Total entries: ${totalEntries}`);
  },

  addDefinition: function(term, definition) {
    if (term in this.definitions) {
      console.log(`This term is already defined.`);
      this.lookupWord(term);
    } else {
      this.definitions[term] = definition;
      console.log(`Added ${term}: ${definition}`);
    }
  },

  removeDefinition: function(term) {
    if (term in this.definitions) {
      delete this.definitions[term];
    }
  },

  searchAllDefinitions: function(keyword) {
    for(const key in this.definitions) {
      if (this.definitions[key] === undefined) {
        continue;
      }
      if (this.definitions[key].includes(keyword)) {
        const keywordIndexStart = this.definitions[key].indexOf(keyword);
        const keywordIndexEnd = keywordIndexStart + keyword.length; // position after keyword
        const consoleDefTxt = `${this.definitions[key].slice(0, keywordIndexStart)}%c${keyword}%c${this.definitions[key].slice(keywordIndexEnd)}`;
        console.log(`${key}: ${consoleDefTxt}`, "color: red; font-weight: bold", "") // second %c with default CSS styles;
      }
    }
  }

};

//dict.lookupWord('scope');
dict.printAllDefinitions();
