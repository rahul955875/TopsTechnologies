import React, { useState } from "react";
import ShowTodos from "./showTodos";

const AddTodos = () => {
    const [input, setInput] = useState('')
    const handleSubmit = ()=>{
        
    }
  return (
    <>
      <div className="container row px-5">
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
