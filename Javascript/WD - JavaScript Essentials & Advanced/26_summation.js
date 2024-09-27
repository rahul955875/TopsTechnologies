// Q.26 Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?
let num = 1523;
let numarray = num.toString().split("").map(Number).reduce((acc,c)=>acc=acc+c);
console.log(numarray)