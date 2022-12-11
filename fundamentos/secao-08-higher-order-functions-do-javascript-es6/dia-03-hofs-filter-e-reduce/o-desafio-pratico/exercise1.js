const data = require('./countries_data');

const expectedResult = 120797034;

const getPopulation = () => data.reduce((accumulator, { population }) => accumulator + population, 0);

console.log(getPopulation());
