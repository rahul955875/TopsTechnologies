function Result() {
  return 'hi its a funtion'
}
function Sum(a, b, ans) {
    return `addition of ${a} and ${b} are : ${a + b} ${ans}`
}
console.log(Sum(4, 5, Result()));//not a callback funtion
 
//callback funtion
function cal(add,x,y){
    return add(x,y)
}
function add(x,y){
    return x+y
}
console.log(cal(add,5,5))