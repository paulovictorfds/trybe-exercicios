const data = require('./countries_data');

const expectedResult = {
  name: 'American Samoa',
  region: 'Oceania',
  currencies: [{ code: 'USD', name: 'United States Dollar' }],
  capital: 'Pago Pago',
  population: 55197,
  area: 199
}

const longestName = () =>
  data.reduce((countryA, countryB) =>
    countryA.name.length > countryB.name.length ? countryA : countryB);

console.log(longestName());
