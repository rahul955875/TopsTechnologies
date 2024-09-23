// Q.14 Find the Character Is Vowel or Not ?
let c = "i";

function isVowel(c){
    c = c.toLowerCase();
    if(c=="a" || c=="e" || c=="i" || c=="o" || c=="u"){
        console.log("character is vowel");
    }
    else{
        console.log("character is not vowel");
    }
}
isVowel('I');