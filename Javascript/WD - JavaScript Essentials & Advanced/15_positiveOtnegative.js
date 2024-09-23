// Q.15 Write to check whether a number is negative, positive or zero?
let num = -0;
function isPositive(num){
    if(num > 0){
        return "number is positive";
    }
    else if(num < 0){
        return "number is negative";
    }
    else{
        return "number is zero";
    }
}
console.log(isPositive(num));