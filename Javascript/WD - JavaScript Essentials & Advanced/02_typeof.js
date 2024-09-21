// Q.2 Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

let a = 10;
let b = '10';
 
console.log(a===b) /* => false not equal */
console.log(a==b)  /* => true its converts to type if needed */

console.log(a + Number(b))

console.log(typeof(a), typeof(b)); /* not same type */