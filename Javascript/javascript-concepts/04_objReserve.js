const obj1 = {
    name: 'rahul',
    role: 'xyz'
}

const values = Object.values(obj1)
const keys = Object.keys(obj1)
const obj2 = {}
for(let i=0; i<keys.length; i++){
    obj2[values[i]]= keys[i]
}
console.log(obj2)