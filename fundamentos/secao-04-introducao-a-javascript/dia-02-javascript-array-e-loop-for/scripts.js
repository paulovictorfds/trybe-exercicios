let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("Todos os valores do array:");
for (let num of numbers) {
    console.log(num);
}
console.log();

// Some todos os valores contidos no array e imprima o resultado;
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Soma de todos os valores do array: " + sum);
console.log();

// Calcule e imprima a média aritmética dos valores contidos no array;
sum = 0;
for (let num of numbers) {
    sum += num;
}
media = sum / numbers.length;
console.log("A média é: " + media);
console.log();

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
    console.log("A média é maior que 20");    
} else {
    console.log("A média é menor ou igual a 20");
}
console.log();

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maiorValor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i];
    }
}
console.log("Maior valor do array: " + maiorValor);
console.log();

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

quantidadeDeImpares = 0;
for (let num of numbers) {
    if (num % 2 !== 0) {
        quantidadeDeImpares++;
    }
}
if (quantidadeDeImpares > 0) {
    console.log("A quantidade de números ímpares no array é: " + quantidadeDeImpares);
} else {
    console.log("nenhum valor ímpar encontrado");
}
console.log();

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menorValor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (menorValor > numbers[i]) {
        menorValor = numbers[i];
    }
}
console.log("Manor valor do array: " + menorValor);
console.log();

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers2 = [];
for (let i = 1; i <= 25; i++) {
    numbers2.push(i);
}
console.log(numbers2);
console.log();

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let num of numbers2) {
    console.log(num / 2);
}
