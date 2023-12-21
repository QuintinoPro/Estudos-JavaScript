// Arrays

let arr = ['Lucas', 17, true]

console.log(arr);

console.log('Primeiro: ', arr[0]);
console.log('Segundo: ', arr[1]);
console.log('Terceiro: ', arr[2]);

console.log('Tamanho do Array: ', arr.length);

console.clear()

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for (let elemento of arr){
    console.log(elemento);
}