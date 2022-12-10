const data = require('./library_data');

const oldBooksOrdered = (books) => {
  const currentYear = new Date().getFullYear();
  return books
    .filter((book) => currentYear - book.releaseYear >= 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered(data));
