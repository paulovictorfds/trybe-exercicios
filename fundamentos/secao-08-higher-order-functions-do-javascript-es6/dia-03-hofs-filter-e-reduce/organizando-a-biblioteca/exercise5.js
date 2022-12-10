const data = require('./library_data');

const oldBooks = () => {
  const currentYear = new Date().getFullYear();
  return data
    .filter((book) => currentYear - book.releaseYear >= 60)
    .map((book) => book.name);
}

console.log(oldBooks());
/* const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
]; */
