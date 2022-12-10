const data = require('./library_data');

const booksByAuthorBirthYear = (birthYear) => data
  .filter((book) => book.author.birthYear === birthYear)
  .map((book) => book.name);

const result = booksByAuthorBirthYear(1920);
console.log(result);
// const expectedResult = [ 'Fundação', 'Duna' ];
