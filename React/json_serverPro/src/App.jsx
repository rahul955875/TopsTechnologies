import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AddDataToApi from "./components/AddDataToApi";

function App() {
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState("");
  const fetchData = () => {
    fetch("http://localhost:3000/employee")
      .then((res) => res.json())
      .then((data) => {
        setData(data.sort((a,b)=>a.id - b.id));

      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    if (confirm("You want to delete this record ?")) {
      fetch(`http://localhost:3000/employee/${id}`, {
        method: "DELETE",
      }).then((res) => fetchData());
    }
  };
  const [input, setInput] = useState({
    id: "",
    ename: "",
    designation: "",
    doj: "",
    city: "",
    profile: "",
  });

  const editData = (emp) => {
    setIsEditing(emp.id);
    setInput(emp);
  };
  return (
    <>
      <AddDataToApi
        fetchData={fetchData}
        formfield={[input, setInput]}
        filedEditing={[isEditing, setIsEditing]}
      />
      <table border={1} className="table p-5 shadow w-75 mx-auto mt-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Empolyee Name</th>
            <th>Designation</th>
            <th>Date of Join</th>
            <th>City</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.ename}</td>
              <td>{emp.designation}</td>
              <td>{emp.doj}</td>
              <td>{emp.city}</td>
              <td>{emp.profile && <img src={emp.profile} alt="" />}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => editData(emp)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteData(emp.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
