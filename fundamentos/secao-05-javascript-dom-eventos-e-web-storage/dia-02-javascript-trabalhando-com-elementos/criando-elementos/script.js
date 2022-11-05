const ondeEuEstou = document.getElementById('elementoOndeVoceEsta');

// Crie um irmão para elementoOndeVoceEsta
const elemento1 = document.createElement('div');
elemento1.innerHTML = 'exercicio-1';
(ondeEuEstou.parentElement).appendChild(elemento1);

// Crie um filho para elementoOndeVoceEsta
const elemento2 = document.createElement('div');
elemento2.innerHTML = 'exercicio-2';
ondeEuEstou.appendChild(elemento2);

// Crie um filho para primeiroFilhoDoFilho
const elemento3 = document.createElement('div');
elemento3.innerHTML = 'exercicio-3';
ondeEuEstou.firstElementChild.appendChild(elemento3);

// A partir desse filho criado, acesse terceiroFilho
console.log(elemento3.parentElement.parentElement.nextElementSibling);
