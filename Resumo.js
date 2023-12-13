// - Arrays

// Push
const numbers = [1,2,3];
const length = numbers.push(4,5);
console.log(numbers);
console.log(length);

// Pop
const stack = [1,2,3,4,5];
const lastItem = stack.pop();
console.log(stack);
console.log(lastItem);

// Shift
const fruits = ["Banana", "Apple","Orange"];
const firstitem = fruits.shift();
console.log(fruits);
console.log(firstitem);


// Unshift
const fruits = ["Banana", "Apple"];
const size = fruits.unshift("Orange","Grape");
console.log(fruits);
console.log(size);

// At
const firstitem = fruits.at(0);
const lastItem = fruits.at(-1)
console.log(firstitem);
console.log(lastItem);

// IndexOf
console.log(fruits.indexOf("Apple"));
console.log(fruits.indexOf("Apple",2));

// LastIndexOf
console.log(fruits.lastIndexOf("Apple"));

// Concat
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const newar = arr1.concat(arr2);
console.log(newar);

// Every
const numbers = [1,2,3,4,5,6]
const even = numbers.every((num) => num % 2 == 0);
console.log(even);

const words = ["Apple", "Date", "Banana"];
const long = words.every((words) => words.length >= 5);
console.log(long);

// Some 
const numbers = [1,2,3,4,5,6]
const even = numbers.some((num) => num % 2 == 0);
console.log(even);

const words = ["Apple", "Date", "Banana"];
const long = words.some((words) => words.length >= 5);
console.log(long);