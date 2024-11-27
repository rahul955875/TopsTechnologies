'use strict'
let even = 'this are evens';
function oddCounter(count){
    for(let i = 1; i<=count; i++){
        if(!(i%2==0)) console.log(i)
            else even += `\n${i}`
    }
    console.log(even)
}
oddCounter(10)