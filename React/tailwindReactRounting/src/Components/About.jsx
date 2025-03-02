import React, { useState } from "react";
// import todos from './todos.json'
function About() {
  const [todosList, setTodosList] = useState([]);
  // console.log(todos)
  return (
    <>
      <button
        onClick={() => import("./todos").then((res) => setTodosList(res.default))}
      >
        Load data
      </button>
      <div className="todos">
         { todosList.map((todo)=><h2 key={todo.name}>Name : {todo.name}</h2>)}
      </div>
    </>
  );
}

export default About;
