// Metodos

const arr1 = [10,30,20,60,40]
let arr2 = []

console.log(arr1.slice(0, 3));
console.log(arr1.slice(4));

console.clear()


console.log('Antes de Adicionar: ', arr2);

arr2.push(17,7)
arr2.unshift(1)

console.log('Depois de Adicionar: ', arr2);

arr2.pop()

console.log('Remover com POP: ', arr2);

console.clear()


console.log('Arr1: ', arr1);
console.log('Arr2: ', arr2);

console.log(arr1.concat(arr2))

console.clear()

console.log(arr1);

let indexdoelemento60 = arr1.indexOf(60)

console.log(indexdoelemento60);

console.log(arr1.includes(10));
console.log(arr1.includes(17));

console.log(arr1);

const arrayinverso = arr1.reverse()

console.log(arrayinverso);