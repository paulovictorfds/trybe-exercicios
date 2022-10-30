
let pessoa = {
    nome: 'Henri',
    idade: 20
}
pessoa = {
    nome: 'Luna',
    idade: 19
}
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// Modifique a variável para que não ocorra Erro;
const pessoa1 = {
    nome: 'Henri',
    idade: 20
}
const pessoa2 = {
    nome: 'Luna',
    idade: 19
}
console.log('Nome:', pessoa1.nome);
console.log('Idade:', pessoa1.idade);
console.log('Nome:', pessoa2.nome);
console.log('Idade:', pessoa2.idade);

// Transforme a função numeroAleatorio em uma arrow function;
// function numeroAleatorio() {
//     return Math.random()
// }
// console.log(numeroAleatorio());

const numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// Transforme a função hello em uma arrow function;
// function hello(nome) {
//     return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

const hello = nome => `Olá, ${nome}!`;
let nome = 'Ivan';
console.log(hello(nome));

// Transforme a função nomeCompleto em uma arrow function;
// function nomeCompleto(nome, sobrenome) {
//     return `${nome} ${sobrenome}`
// }
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => `${nome} ${sobrenome}`;
let sobrenome = 'Pires';
console.log(nomeCompleto(nome, sobrenome));

// Altere a expressão if/else utilizando ternary operator;
// let speed = 90;
// const speedCar = (speed) => {
//   if (speed >= 120) {
//     return `Você ultrapassou o limite de velocidade`;
//   } else {
//     return `Você está na velocidade permitida`;
//   }
// };
// console.log(speedCar(speed));

let speed = 90;
const speedCar = speed =>
    speed >= 120 ?
    `Você ultrapassou o limite de velocidade` :
    `Você está na velocidade permitida`;
console.log(speedCar(speed));
