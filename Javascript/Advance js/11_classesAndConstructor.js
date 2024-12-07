class person {
  constructor(fname='rahul',role ='web-developer') {
    this.fname = fname;
    this.role = role;
  }
  getDetails(){
    return `${this.fname} is ${this.role}`
  }
}
const insPerson1 = new person()
console.log(insPerson1.getDetails())
const insPerson2 = new person('lucky','dog')
// console.log(insPerson.fname);
console.log(insPerson2.getDetails())

person.prototype.greet = function hi(){
    return `hi`
}

console.log(insPerson1.greet())