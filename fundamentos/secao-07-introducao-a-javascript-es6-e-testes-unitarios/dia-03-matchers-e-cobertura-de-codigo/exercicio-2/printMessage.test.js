const { info, printMessage } = require('./printMessage.js');

describe('A função printMessage', () => {
  it('possui um objeto que possui a chave personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('retorna uma string iniciada com "Boas vindas,"', () => {
    expect(printMessage(info)).toMatch(new RegExp('^Boas vindas,'));    
  });
  it('retorna um objeto com o valor personagem correto"', () => {
    expect(printMessage(info)).toContain(info.personagem);
  });
  
});
