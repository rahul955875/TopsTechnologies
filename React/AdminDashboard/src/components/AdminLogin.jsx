import React, { useState } from "react";
import { useNavigate } from 'react-router'
const AdminLogin = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  localStorage.setItem(
    "AdminData",
    JSON.stringify({ name:'Rahul', email: "Admin@mail", password: "Admin" })
  );

  const handleUserInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const adminData = JSON.parse(localStorage.getItem("AdminData"));
    if (
      adminData.email === input.email &&
      adminData.password === input.password
    ) {
      alert("Login successful");
      localStorage.setItem('LoginAdmin',adminData.name)
      navigate('/home')
      
    } else {
      alert("not a valid admin");
    }
  };
  return (
    <div className="container">
      <form className="" onSubmit={handleSubmit}>
        <div className="row w-50 mx-auto mt-5 g-2 shadow p-4">
          <h1>Login</h1>
          <div className="col-12 mt-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              required
              name="email"
              value={input.email}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-12">
            <input
              type="password"
              required
              placeholder="Enter Your Password"
              className="form-control"
              name="password"
              value={input.password}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="mt-2 px-3 btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
