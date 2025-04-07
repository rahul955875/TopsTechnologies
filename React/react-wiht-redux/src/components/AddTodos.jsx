import React, { useState } from "react";
import ShowTodos from "./showTodos";
import {useDispatch} from 'react-redux'
import { addTodo } from "../Features/todoSlice";
const AddTodos = () => {
    const [input, setInput] = useState('')  
    const dispatch= useDispatch()
    const handleSubmit = ()=>{
      dispatch(addTodo(input))
      alert('todo added !!!')       
    }
  return (
    <>
      <div className="container row px-5 mt-5">
        <div className="col-8">
          <input
            type="text"
            placeholder="Enter your todo..."
            className="form-control"
            onChange={(e)=>setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="col-2">
          <button onClick={handleSubmit} className="btn btn-primary">Add Todo</button>
        </div>
      <ShowTodos/>
      </div>
    </>
  );
};

export default AddTodos;
