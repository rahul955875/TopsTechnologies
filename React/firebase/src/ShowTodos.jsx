import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ShowTodos = () => {
  const [IsEditing, setIsEditing] = useState(false);
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-4 shadow">
            {IsEditing ? (
              <input type="text" className="form-control" />
            ) : (
              <span>todos task</span>
            )}
          </div>
          <div className="col-4 d-flex gap-2">
            <button className="btn btn-success">
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="btn btn-danger">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTodos;
