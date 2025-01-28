import React, { useState } from 'react'

function Example2() {
    const [input,setInput] = useState({
        name : '',
        city : ''
    })
    const handleEvent = (e)=>{
        setInput({...input, [e.target.name]: e.target.value})
    }
  return (
    <div className='text-2xl '>
    Enter Your Name: <input type='text' name='name' value={input.name}  className='border mt-3' onChange={handleEvent} />
    <br />
    Enter City : <input type="text" name="city" id="" value={input.city} onChange={handleEvent}  className='border mt-3' />
    <br />
    Your Name : {input.name}
    <br />
    Your City : {input.city}
    </div>
  )
}

export default Example2