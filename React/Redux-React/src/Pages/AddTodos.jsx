import React, { useState } from 'react'

const AddTodos = () => {
  const [todo, setTodo] = useState('')
  return (
    <div className='container'>
      <div className="row">
        <div className="col-8">
          <input type="text" className='form-control'  placeholder='Add Your task...' onChange={(e)=>}/>
        </div>
        <div className="col-4">
          <button className='btn btn-primary'>Add todo</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodos