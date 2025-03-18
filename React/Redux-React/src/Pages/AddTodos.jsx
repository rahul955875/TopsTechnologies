import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Features/todoSlice'

const AddTodos = () => {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addTodo(todo))
    alert('todo added.')
    setTodo('')
  }
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-8">
          <input type="text" className='form-control'  value={todo} placeholder='Add Your task...' onChange={(e)=>setTodo(e.target.value)}/>
        </div>
        <div className="col-4">
          <button onClick={} className='btn btn-primary'>Add todo</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodos