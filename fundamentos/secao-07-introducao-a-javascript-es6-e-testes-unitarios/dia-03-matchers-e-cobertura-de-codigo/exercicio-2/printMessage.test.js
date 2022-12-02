const { info, printMessage } = require('./printMessage.js');

describe('A função printMessage', () => {
  it('possui um objeto que possui a chave personagem', () => {
    expect(info).toHaveProperty('personagem');
  });
  it('retorna uma string iniciada com "Boas vindas,"', () => {
    expect(printMessage(info)).toMatch(new RegExp('^Boas vindas,'));    
  });
  it('retorna uma mensagem com o nome do personagem correto"', () => {
    expect(printMessage(info)).toContain(info.personagem);
  });
  it('lança um erro "objeto inválido" se o parâmetro não for um objeto"', () => {
    expect(() => {
      printMessage('Margarida');
    }).toThrow(('objeto inválido'));
  });
});
