import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import AddDataToApi from "./components/AddDataToApi";
import SortData from "./SortData";
import SeachData from "./components/SeachData";

function App() {
  // console.log('rendering')
  const [callback, setCallback] = useState(() => () => true);

  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState("");
  const fetchData = () => {
    fetch("http://localhost:3000/employee")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    if (confirm("You want to delete this record ?")) {
      fetch(`http://localhost:3000/employee/${id}`, {
        method: "DELETE",
      })
        .then(() =>
          setData((prevData) => prevData.filter((emp) => emp.id !== id))
        )
        .catch((e) => console.log("error for 0deleting data", e));
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
    // alert('update data in above form')
    window.scrollTo(0,0)
  };
  const [sortTable, setSortTable] = useState(() => () => {});
  const filterdData = [...data].sort(sortTable).filter(callback);
  return (
    <>
      <AddDataToApi
        fetchData={fetchData}
        formfield={[input, setInput]}
        filedEditing={[isEditing, setIsEditing]}
      />
      <SortData setSortTable={setSortTable} />
      <SeachData setCallback={setCallback} />
      <table
        border={1}
        className="table p-5 shadow w-75 mx-auto mt-5 text-center"
      >
        <thead>
          <tr>
            <th className="">
              <button
                className="btn btn-outline-primary"
                onClick={() => setSortTable(() => (a, b) => a.id - b.id)}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>{" "}
              Id{" "}
              <button
                className="btn btn-outline-primary"
                onClick={() => setSortTable(() => (a, b) => b.id - a.id)}
              >
                <FontAwesomeIcon icon={faArrowDown} />
              </button>
            </th>
            <th>Empolyee Name</th>
            <th>Designation</th>
            <th>Date of Join</th>
            <th>City</th>
            <th>salary</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {filterdData.length ? filterdData.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.ename}</td>
              <td>{emp.designation}</td>
              <td>{emp.doj}</td>
              <td>{emp.city}</td>
              <td>{emp.salary}</td>
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
          )) : <tr><td colSpan={7} className="fs-4">Employee Not Found - according to your search</td></tr>}
        </tbody>
      </table>
    </>
  );
}

export default App;
