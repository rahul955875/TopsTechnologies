// Q.18 Write to find minimum number among 3 numbers using ternary operator in JS?
let a= 100, b=20, c=30;
let min = (a<b) ? (a<c ?a : c) : (b<c ? b : c);
console.log(min)