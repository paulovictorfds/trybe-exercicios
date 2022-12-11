const data = require('./countries_data');

const expectedResult = 4311757;

const getTotalArea = () =>
  data.reduce((accumulator, { area }) => accumulator + area, 0);

console.log(getTotalArea());
