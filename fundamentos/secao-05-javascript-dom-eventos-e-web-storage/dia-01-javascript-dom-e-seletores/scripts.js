/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
4. Crie e execute uma função que corrija o texto da tag <h1>.
5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
*/

function alteraTexto() {
  const texto = document.getElementsByTagName('p')[1];
  texto.innerText = 'Daqui a 2 anos me vejo com odesenvolvedor pleno.';
}
alteraTexto();

function mudaCorQuadrado() {
  const quadrado = document.getElementsByClassName('main-content')[0];
  quadrado.style.backgroundColor = 'rgb(76,164,109)';
}
mudaCorQuadrado();

function mudaCorQuadrado2() {
  const quadrado = document.getElementsByTagName('section')[0];
  quadrado.style.backgroundColor = 'white';
}
mudaCorQuadrado2();

function corrigeTexto() {
  const texto = document.getElementsByTagName('h1')[0];
  texto.innerText = 'Exercício - JavaScript';
}
corrigeTexto();

function modificarTexto() {
  const texto = document.getElementsByTagName('p')[0];
  texto.innerHTML = texto.innerHTML.toUpperCase();
}
modificarTexto();

function mostrarTodasTagsP() {
  const p = document.getElementsByTagName('p');
  for (const iterator of p) {
    console.log(iterator);
  }
}
mostrarTodasTagsP();
