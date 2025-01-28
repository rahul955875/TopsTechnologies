import React, { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)
    return (
    <div className='text-center mt-6'>
    <h2 className='text-2xl'>Counter : {count}</h2>
    <button className='text-xl p-4 border mt-4' onClick={()=>setCount(count+1)}>Increment</button>
    <button className='text-xl p-4 border mt-4' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter