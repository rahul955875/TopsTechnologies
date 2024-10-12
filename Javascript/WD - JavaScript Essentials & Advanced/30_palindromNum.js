/* Q.30 Accept 3 numbers from user using while loop and check each numbers palindrome */

function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    while (num > 0) {
        let digit = num % 10;
        reversedNum = (reversedNum * 10) + digit;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

let count = 0;
let userInput = 111;
while (count < 3) {
    let num = parseInt(userInput);
    
    if (isPalindrome(num)) {
        console.log(`${num} is a palindrome.`);
    } else {
        console.log(`${num} is not a palindrome.`);
    }
    userInput++;
    count++;
}
