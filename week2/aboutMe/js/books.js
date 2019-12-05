var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];

const ul = document.body.appendChild(document.createElement('ul'));

books.forEach((book, index) => {
  const list = document.createElement('li');
  let mybook = document.createElement('p');
  mybook.innerHTML = `${index + 1}# Book:
  Title: <a id="a${index + 1}" href=''>${book.title}</a>
  Author: ${book.author}
  Read: ${book.alreadyRead}`;
  //document.body.appendChild(mybook);
  list.appendChild(mybook);
  ul.appendChild(list);
  const search = `#a${index + 1}`;
  const a = document.querySelector(search);
  a.href = 'https://www.google.com/search?q=' + book.title;
});


/*
Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
Bonus: Use a ul and li to display the books.
Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
Bonus: Change the style of the book depending on whether you have read it or not.

*/
