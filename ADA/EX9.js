function Maior(n1, n2, n3) {
    return Math.max(n1, n2, n3);
}

function Menor(n1, n2, n3) {
    return Math.min(n1, n2, n3);
}

var n = [];

for (let x = 0; x < 3; x++){
    n[x] = 10 + x;
}

console.log("Numeros Digitados:", n[0],n[1],n[2]);
console.log("Menor número:", Menor(n[0], n[1], n[2]));
console.log("Maior número:", Maior(n[0], n[1], n[2]));

