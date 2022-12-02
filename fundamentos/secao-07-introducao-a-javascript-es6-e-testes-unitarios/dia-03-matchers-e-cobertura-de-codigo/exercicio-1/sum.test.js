const sum = require('./sum');

describe('A função soma', () => {
  it('retorna 9 quando sum(4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
  });
  it('retorna 0 quando sum(0, 0)', () => {
    expect(sum(0, 0)).toBe(0);
  });
  it('lança um erro quando um dos parametros não é um number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('lança o erro "parameters must be numbers" quando um dos parametros não é um number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(Error('parameters must be numbers'));
  });
});
