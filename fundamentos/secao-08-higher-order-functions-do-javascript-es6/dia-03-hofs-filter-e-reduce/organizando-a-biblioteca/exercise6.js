const data = require('./library_data');

// const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () =>
  data.find((book) => (book.author.name.match(/\./g) || []).length >= 3).name;

console.log(authorWith3DotsOnName());
