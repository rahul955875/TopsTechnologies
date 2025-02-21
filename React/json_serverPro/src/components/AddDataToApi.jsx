import React, { useEffect, useState } from "react";

const AddDataToApi = ({ fetchData }) => {
  const [input, setInput] = useState({
    id: "",
    ename: "",
    designation: "",
    doj: "",
    city: "",
    profile: "",
  });
  const hanldeChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    // e.perventDefault()
    fetch("http://localhost:3000/employee", {
      method: "POST",
      body: JSON.stringify(input),
    });

  };
  return (
    <div className="container text-center mt-4">
      <h2 className="mb-4">Add User Data</h2>
      <form action="" className="row g-4" onSubmit={handleSubmit}>
        <div className="col-4">
          <input
            type="number"
            placeholder="Id"
            name="id"
            value={input.id}
            onChange={hanldeChange}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Name"
            name="ename"
            value={input.ename}
            onChange={hanldeChange}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Designation"
            name="designation"
            value={input.designation}
            onChange={hanldeChange}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            placeholder="Date of join"
            name="doj"
            value={input.doj}
            onChange={hanldeChange}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="City"
            name="city"
            value={input.city}
            onChange={hanldeChange}
            className="form-control"
          />
        </div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Profile"
            name="profile"
            className="form-control"
            value={input.profile}
            onChange={hanldeChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="form-control btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDataToApi;
