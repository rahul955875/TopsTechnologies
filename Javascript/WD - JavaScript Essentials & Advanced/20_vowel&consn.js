// ii. Vowel or Consonant using switch case in JS?
let letter = "r";
switch (letter) {
    case "a" :
    case "e" :
    case "i" :
    case "o" :
    case "u" :
        console.log(`${letter} is vowel`)
        break;

    default:
        if(typeof(letter) == "number"){
        console.log("its not valid letter")
        }
        else{
            console.log(`${letter} is consonant`)
        }
        break;
}