
function Contar(frase){
    const palavras = frase.split(" ");
    return palavras.length;
}

var frase = "ADA Cursos - Santander";

console.log(Contar(frase));