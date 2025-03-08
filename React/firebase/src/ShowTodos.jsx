import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCancel,
  faCheck,
  faCheckCircle,
  faCross,
  faEdit,
  faMultiply,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const ShowTodos = ({ todo, todoCompleted, deleteTodos, updateTodos }) => {
  const [input, setInput] = useState(todo);
  const [IsEditing, setIsEditing] = useState(false);
  console.log("rendering");
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 shadow">
            {IsEditing ? (
              <input
                type="text"
                value={input.title}
                className="form-control"
                onChange={(e) =>
                  setInput((pre) => ({ ...pre, title: e.target.value }))
                }
              />
            ) : (
              <span
                style={{
                  textDecoration: input.completed ? "line-through" : "none",
                }}
              >
                {input.title}
              </span>
            )}
          </div>
          <div className="col-4 d-flex gap-2">
            { !input.completed ? 
            <button
              className="btn btn-success"
              onClick={() => {
                todoCompleted(input);
                setInput((prev) => ({ ...prev, completed: !prev.completed }));
              }}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button> : <button
              className="btn btn-danger"
              onClick={() => {
                todoCompleted(input);
                setInput((prev) => ({ ...prev, completed: !prev.completed }));
              }}
            >
              <FontAwesomeIcon icon={faMultiply} />
            </button> }

            {IsEditing ? (
              <button
                className="btn btn-warning"
                onClick={() => {
                  updateTodos(input, input.id);
                  setIsEditing(false);
                }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            )}
            <button
              className="btn btn-danger"
              onClick={() => deleteTodos(input.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTodos;
