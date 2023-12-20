// Laço Condicional 

const input = require('readline-sync')

let numsorte = 17
console.log("meu pau");

let numusu = Number(input.question("Digite um Numero: "))

while(numusu !== numsorte){
    console.log("Voce Errou! Digite novamente...");

    numusu = Number(input.question("Digite um Numero: "))
    
}console.log("Voce Acertou!");

