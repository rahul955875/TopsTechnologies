// Q.24 Write to print Fibonacci series up to given numbers?
// 0 1 1 2 3 5

let n = 10;
let first = 0;
let scecond = 1;
let next;
console.log(first);
console.log(scecond);
for (let i = 2; i < n; i++) {
    next = first + scecond;
    console.log(next);
    first = scecond;
    scecond = next;
}
