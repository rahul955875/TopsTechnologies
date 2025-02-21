import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import { useEffect, useState } from "react";
import AddDataToApi from "./components/AddDataToApi";

function App() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("http://localhost:3000/employee")
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
    <AddDataToApi fetchData={fetchData} />
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
              <td>
                {emp.profile &&<img src={emp.profile} alt="" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
