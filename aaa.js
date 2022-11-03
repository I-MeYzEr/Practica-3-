let a = 13.890123;
let b = 2.891564;
let c = 3;

let x = Math.round(a % 1* Math.pow(10,c));
let y = Math.round(b % 1* Math.pow(10,c));

console.log(x, y);

console.log('', a === b);
console.log('', x === y);
console.log('', x > y);
console.log('', x < y);
console.log('', x != y);
console.log('', x >= y);
console.log('', x <= y);