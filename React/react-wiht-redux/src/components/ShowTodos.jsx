import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTodos, removeTodo, todoCompleted } from "../Features/todoSlice";

const ShowTodos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const [editId, setEditId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");
  // console.log(todos);
  const dispatch = useDispatch();
  const fetchTodo = ({ id, text }) => {
    setEditId(id);
    setUpdatedText(text);
  };
  const editTodo = () => {
    dispatch(editTodos({ editId, updatedText }));
    setEditId("");
    setUpdatedText("");
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
                  className={todo.completed ? "text-decoration-line-through" : ""}
                >
                  {todo.text}
                </td>
              )}
              <td>
                {editId ? (
                  <button onClick={editTodo} className="btn btn-primary mx-2">
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
                    onClick={() => {
                      dispatch(todoCompleted(todo.id));
                    }}
                  >
                    Completed
                  </button>
                ) : (
                  <button
                    className="btn btn-success mx-2"
                    onClick={() => {
                      dispatch(todoCompleted(todo.id));
                      // setIsCompleted((prev) => !prev);
                    }}
                  >
                    Mark as Not completed
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
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

export default ShowTodos;
