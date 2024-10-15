const user =  {
    name : "rahul",
    age : 21,
    job : "front-end"
}
const userCopy = user;
const user2 = {
    name : "jignesh",
    age : 20,
    job : "full-stack"
}
const user3 = {
    name : "jignesh",
    age : 20,
    job : "full-stack"
}
/* 
actually its compares the refrence not the values
in const userCopy = user will true beacuse the referance will be the same */
// console.log(user == user2)
// console.log(user == userCopy)
console.log(user2.name == user3.name) //true its checks the value
console.log(user2.name == user.name) //false

console.log(JSON.stringify(user) === JSON.stringify(user2)) // checks the whole object values fales
console.log(JSON.stringify(user2) === JSON.stringify(user3)) //true

console.log(user.name = "rohit")
console.log(user)
