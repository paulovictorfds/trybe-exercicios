const data = require('./library_data');

const fantasyOrScienceFictionAuthors = () => data
  .filter(({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica')
  .map((book) => book.author.name)
  .sort();

console.log(fantasyOrScienceFictionAuthors());
/*
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];
*/
