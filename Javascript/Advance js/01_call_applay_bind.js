const person = {
    name : 'rahul',
    role : 'front-end',
    skills : ['html','css','js']
}
const introduce = {
    intro : function(greet) {
        console.log( greet + this.name + ' and am ' + this.role +' developer' + ' with skills ' + this.skills)
    }
}
introduce.intro.call(person, 'hi am ')//we pass this
person.name = 'jignesh'
// console.log(person)
// introduce.intro.call(person)
introduce.intro.apply(person,['hello am ']) // similer but pass a array object

const indra = introduce.intro.bind(person, 'helooo ')
indra() //dont invoke function immediatly crate new function