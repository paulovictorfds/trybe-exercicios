/*  Utilize if/else para fazer um programa que defina três números em constantes 
    e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
    Bonus: use somente um if. */

const num1 = 1;
const num2 = 7;
const num3 = 3;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}


/*  Utilize if/else para fazer um programa que defina três números em constantes
    e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
    Bonus: use somente um if. */

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}
