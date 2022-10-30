let statusMotor = 'desligado';

const ligarDesligar = () => (
    statusMotor === 'desligado' ?
        statusMotor = 'ligado' :
        statusMotor = 'desligado'
)
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);
console.log(`O motor está ${ligarDesligar()}`);

const circleArea = radius => Math.PI * (radius ** 2)
let radius = 5;
console.log(
    `Essa é a área do cículo ${circleArea(radius)}`
);

// const longestWord = frase => {
//     let maiorPalavra = '';
//     for (const palavra of frase.split(" ")) {
//         palavra.length > maiorPalavra.length ?
//             maiorPalavra = palavra : 1;
//     }
//     return maiorPalavra;
// }

const longestWord = phrase =>
    phrase.split(" ").sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Jumento celestino come capim de manha'));

