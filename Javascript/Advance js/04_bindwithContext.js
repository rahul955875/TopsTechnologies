const person = {
    firstName : 'rahul',
    lastName : 'nizare',
    intro : function(){
     return this.firstName + this.lastName   
    }
}
const res = person.intro.bind(person)
console.log(res())