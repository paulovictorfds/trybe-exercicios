const data = require('./library_data');

const fantasyOrScienceFiction = () =>
  data.filter(({ genre }) =>
    genre === 'Fantasia' || genre === 'Ficção Científica');

console.log(fantasyOrScienceFiction());
