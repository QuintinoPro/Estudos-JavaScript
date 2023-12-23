// Funções

// Definição
function saudacao() {
    console.log("Seja bem vindo ao curso de JavaScript!");
}

saudacao()

console.clear()

// Parametros
function saudacao(nome,curso) {
    console.log(`Olá, ${nome}! Seja bem vindo ao curso de ${curso}!`);
}

const nome = 'Lucas'

saudacao(nome, 'JavaScript')

console.clear()

// Retorno da Função

function soma(n1,n2) {
    return n1 + n2
}

let result = soma(10,7)

console.log(result);

console.clear()

function maior50(num) {
    if (num > 50) {
        return true
    }

    return false
}

