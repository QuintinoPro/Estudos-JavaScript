// Laços Numericos - FOR
const input = require('readline-sync')

let notas = [0,0,0]
let soma = 0
let maior = [0,0,0]

for (let i = 0; i < 3; i++) {
    notas[i] = Number(input.question(`Informe a Nota ${(i+1)}: `));
    
    if (notas[i] > maior[0]) {
        maior[2] = maior[1];
        maior[1] = maior[0];
        maior[0] = notas[i];
    } else if (notas[i] > maior[1]) {
        maior[2] = maior[1];
        maior[1] = notas[i];
    } else if (notas[i] > maior[2]) {
        maior[2] = notas[i];
    }
    
}
console.clear()

let result = (maior[0] + maior[1])/2


console.log("Melhor Nota: ",maior[0]);
console.log("2° Melhor Nota: ",maior[1]);
console.log("Menor Nota: ",maior[2]);

console.log("Media do Aluno: ",result);

