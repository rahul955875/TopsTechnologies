import React, { useState } from "react";
import RecShowTodos from "./RecShowTodos";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";
const RecAddTodos = () => {
  const [input, setInput] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleSubmit = () => {
    if (input.trim()) {
      setTodoList((prev) => [
        ...prev,
        { id: crypto.randomUUID(), text: input, completed: false },
      ]);
      alert("todo added !!!");
      setInput("");
    }
  };
  return (
    <>
      <div className="container row px-5 mt-5">
        <h1 className="mb-5">Todos List using Recoil</h1>
        <div className="col-8">
          <input
            type="text"
            placeholder="Enter your todo..."
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="col-2">
          <button onClick={handleSubmit} className="btn btn-primary">
            Add Todo
          </button>
        </div>
        <RecShowTodos />
      </div>
    </>
  );
};

export default RecAddTodos;
