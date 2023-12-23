// Objetos

// Criação

let arr = ["Lucas",true,17] // Array

let pessoa = {
    nome: 'Lucas',
    idade: 27,
}

console.log(pessoa);

console.log(pessoa.nome);

console.log(pessoa['nome']);


// Adicionar

pessoa.altura = 1.87

console.log(pessoa);

delete pessoa.altura

console.log(pessoa);

console.clear()

//Percorrer

for (let chave in pessoa ) {
    console.log(chave);
    
}