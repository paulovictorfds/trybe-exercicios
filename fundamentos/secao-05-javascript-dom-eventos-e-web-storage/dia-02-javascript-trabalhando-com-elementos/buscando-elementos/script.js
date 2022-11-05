// Acesse o elemento elementoOndeVoceEsta.
const ondeEuEstou = document.getElementById('elementoOndeVoceEsta');
console.log(ondeEuEstou);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = ondeEuEstou.parentNode;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele
ondeEuEstou.firstElementChild.innerHTML = 'Teste';

// Acesse o primeiroFilho a partir de pai.
console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
console.log(ondeEuEstou.previousElementSibling);

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
console.log(ondeEuEstou.parentElement.innerText);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
console.log(ondeEuEstou.nextElementSibling);

// Agora acesse o terceiroFilho a partir de pai
console.log(pai.children[2]);
