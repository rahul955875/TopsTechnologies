import React, { useReducer } from 'react'

function ReducerArith() {
    const init = 0;
const mathTask = (state,action) =>{
 switch (action) {
    case "add":
        return state + 1;
    
    case "sub":
        return state - 1;
    
    case "multi":
        return state * 2;
    
    case "devide":
        return state / 2;
    
    case "reset":
        return 0;
    
 
    default:
         throw Error('invalid input')
 }
}
const [number,setNumber] = useReducer(mathTask,init) 
  return (
    <>
    <button className='p-4' onClick={()=> setNumber('add')}>Add</button>
    <button className='p-4' onClick={()=> setNumber('sub')}>Subtract</button>
    <button className='p-4' onClick={()=> setNumber('multi')}>Multiply</button>
    <button className='p-4' onClick={()=> setNumber('devide')}>Divide</button>
    <button className='p-4' onClick={()=> setNumber('reset')}>Reset</button>
    <p>{number}</p>
    </>
  )
}

export default ReducerArith