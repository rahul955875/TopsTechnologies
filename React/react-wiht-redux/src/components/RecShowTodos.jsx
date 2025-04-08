import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../recoil/atoms";

const RecShowTodos = () => {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [editId, setEditId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  // console.log(todos);

  const fetchTodo = ({ id, text }) => {
    setEditId(id);
    setUpdatedText(text);
  };
  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: updatedText } : todo
    );
    setTodos(updatedTodos);
    setEditId("");
    setUpdatedText("");
  };
  const markToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Todo List</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              {editId === todo.id ? (
                <td>
                  <input
                    className="form-control"
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                </td>
              ) : (
                <td
                  className={
                    todo.completed ? "text-decoration-line-through" : ""
                  }
                >
                  {todo.text}
                </td>
              )}
              <td>
                {editId ? (
                  <button
                    onClick={() => editTodo(todo.id)}
                    className="btn btn-primary mx-2"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => fetchTodo(todo)}
                    className="btn btn-warning mx-2"
                  >
                    Edit
                  </button>
                )}
                {!todo.completed ? (
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => markToggle(todo.id)}
                  >
                    Completed
                  </button>
                ) : (
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => markToggle(todo.id)}
                  >
                    Mark as Not completed
                  </button>
                )}
                <button
                  onClick={() =>
                    setTodos((prev) =>
                      prev.filter((item) => item.id !== todo.id)
                    )
                  }
                  className="btn btn-danger mx-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecShowTodos;
