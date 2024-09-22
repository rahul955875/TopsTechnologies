
// Q.12 What is the result of the expression true && false || false && true?


if(true && false || false && true){
    console.log(true);
}
else{
    console.log(false)
}
/* answer will be false because true && false => false 
false && true => false 
false || false => false */