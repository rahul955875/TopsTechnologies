function fibonacchi(count) {
  let pre = 0;
  let next = 1;
  let fibo;
  console.log(pre);
  console.log(next);
  if (count < 1) return 
  for (let i = 0; i <= count; i++) {
    console.log((fibo = pre + next));
    pre = next;
    next = fibo;
  }
}
fibonacchi(10)