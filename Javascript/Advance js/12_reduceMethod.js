const fruits = ['apple','banana','cherry','mango']
const newfruits = fruits.reduce((acc,cur)=>{
    return acc + ' ' + cur
},1)
console.log(newfruits)