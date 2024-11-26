function isPrime(val){
    for(let i=2; i<=Math.sqrt(val); i++){
        if(val % i === 0){
            return false
        }
    }
    return val>1
}
console.log([1,3,5].find(isPrime))
console.log([12,3,5].findIndex(isPrime))
    