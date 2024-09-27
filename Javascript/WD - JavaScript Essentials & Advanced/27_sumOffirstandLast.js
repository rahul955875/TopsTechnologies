// Q.27 Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -
//     5) in JS?

function sumFirstLast(num){
   let newNum = num.toString();
    let fnum = parseInt(newNum[0]);
    let lnum = parseInt(newNum[newNum.length-1]);
    console.log(fnum + lnum)
}
sumFirstLast(1234);