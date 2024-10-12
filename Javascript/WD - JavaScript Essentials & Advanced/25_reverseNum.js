// Q.25 Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?
let num = 64728;
let numarray = num.toString().split("");
let con = (numarray.reverse().join(""))
let rev = Number(con)
// console.log(typeof con)
console.log(rev)