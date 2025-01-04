function createUserObj(firstName,lastName,age){
    const user = {
    firstName,
    lastName,
    age,
    getAge() {
        return new Date().getFullYear() - age
    }
}
return user
}

const user1 = createUserObj('rahul','nizare',22)
// console.log(user1.getAge())
const user2 = createUserObj('jignesh','solanki',21)
const user3 = createUserObj('satyam','jasani',23)
console.log(user1,user2,user3)