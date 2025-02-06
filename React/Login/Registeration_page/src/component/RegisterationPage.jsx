import React, { useState } from "react";
import { Link, Navigate, useNavigate, useNavigation } from "react-router";

const RegisterationPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const saveDataOnLocal = (e) => {
    e.preventDefault();
    const existingUserData = JSON.parse(localStorage.getItem("userData"));
    if (existingUserData) {
      const checkDuplicateUser = existingUserData.find(
        (item) => item.email === userData.email
      );
      if (checkDuplicateUser) {
        alert("User Email Alerdy Exists");
        return;
      }
    }
    const existingData = [userData, ...(existingUserData || [])];
    console.log(existingData);
    localStorage.setItem("userData", JSON.stringify(existingData));
    alert("Register successfully");
    navigate("/");
  };
  return (
    <div className="container">
      <form className="" onSubmit={saveDataOnLocal}>
        <div className="row w-50 mx-auto mt-5 g-2 shadow p-4">
          <h1>Register</h1>
          <div className="col-12 mt-3">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="form-control"
              required
              name="username"
              value={userData.username}
              onChange={handleInput}
            />
          </div>
          <div className="col-12">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              required
              name="email"
              value={userData.email}
              onChange={handleInput}
            />
          </div>
          <div className="col-12">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              required
              name="password"
              value={userData.password}
              onChange={handleInput}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="mt-2 px-3 btn btn-primary">
              Register
            </button>
          </div>
          <div>
            <Link to="/">Alerdy have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterationPage;
