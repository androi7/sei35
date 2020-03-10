// The Reading List

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    alreadyRead: false
  },
  {
    title: 'Catch-22',
    author: 'Joseph Heller',
    alreadyRead: false
  },
  {
    title: 'On the Road',
    author: 'Jack Kerouac',
    alreadyRead: false
  },
  {
    title: 'The Lord Of The Rings',
    author: 'J. R. R. Tolkien',
    alreadyRead: true
  },
  {
    title: 'The Catcher in the Rye',
    author: 'JD Salinger',
    alreadyRead: false
  },
  {
    title: 'Ulysses',
    author: 'James Joyce',
    alreadyRead: true
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    alreadyRead: true
  }
];

for(let i = 0; i < books.length; i++) {
  let book = books[i];
  let read = book.alreadyRead ? 'You have already read' : 'You still need to read';
  console.log(`${read} "${book.title}" by ${book.author}.`);
}


// The Recipe Card

const recipe = {
  title: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa'],
  print: function() {
    console.log(`${this.title}`);
    console.log(`Serves: ${this.servings}`);
    console.log(`Ingredients:\n${this.ingredients.join('\n')}`);
  }
};

recipe.print();


// The Movie Database

const movie = {
  title: 'Law Abiding Citizen',
  duration: 118,
  stars: ['Gerard Butler', 'Jamie Foxx', 'Leslie Bibb', 'Colm Meaney', 'Bruce McGill'],
  print: function() {
    console.log(`${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars.join(', ')}.`);
  }
}

movie.print();
