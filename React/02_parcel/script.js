import {user} from './data.js'
import React from 'react'
console.log(user)
console.log(React)
const arr = ['html','css','javascript','react']
console.log(confirm('You are ok?'))

function arrTOobj(arr){
    const newObj = {}
    arr.forEach((e,i) =>{
        newObj[i+1] = e
    })
    return newObj
}
console.log(arrTOobj(arr))
// console.log() 
