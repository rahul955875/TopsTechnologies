import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
const LoginPage = () => {
    const navigate = useNavigate()
  const [userLoginDetail, setUserLoginDetail] = useState({
    email: "",
    password: "",
  });
  const handleUserInput = (e) => {
    setUserLoginDetail((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const ValidUser = (e) => {
    e.preventDefault()
    const existingUser = JSON.parse(localStorage.getItem("userData"));
    if (existingUser) {
      const isUser = existingUser.find(
        (user) =>
          user.email === userLoginDetail.email &&
          user.password === userLoginDetail.password);
          console.log(isUser)
      if (isUser) {
        alert("Login successfully");
        localStorage.setItem("loginUser",JSON.stringify(isUser))
        navigate('/Home')
    }
    else{
        alert('Invalid Email or Password')
    }
} else {
    alert("Your Not Register");
    navigate('/Register')
    }
  };
  return (
    <div className="container">
      <form className="" onSubmit={ValidUser}>
        <div className="row w-50 mx-auto mt-5 g-2 shadow p-4">
          <h1>Login</h1>
          <div className="col-12 mt-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              required
              name="email"
              value={userLoginDetail.email}
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
              value={userLoginDetail.password}
              onChange={handleUserInput}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="mt-2 px-3 btn btn-primary">
              Login
            </button>
          </div>
          <div>
            <Link to="/Register">Dont have an account?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
