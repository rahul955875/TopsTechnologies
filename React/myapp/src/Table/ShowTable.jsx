import React, { useEffect, useState } from "react";

function ShowTable() {
  const [empdata, setEmpData] = useState([]);
  useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setEmpData(data)
    })},[])
    
  return (
    <>
      <table className="table shadow w-75 m-auto mt-5">
        <thead>
          <tr className="">
            <th>Id</th>
            <th>Employee Name</th>
            <th>City</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
            {empdata.map((empData)=>
                 (<tr key={empData.id}>
                    <td>{empData.id}</td>
                    <td>{empData.name}</td>
                    <td>{empData.address?.city}</td>
                    <td>{empData.email}</td>
                    <td>{empData.company.name}</td>
                </tr>)
            )}
        </tbody>
      </table>
    </>
  );
}

export default ShowTable;
