import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase/firebase";

const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const singUser = await signInWithEmailAndPassword(auth,user.email, user.password)
      navigate('/Home')
      console.log(singUser)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <form className="container " onSubmit={handleSubmit}>
        <div className="row col-6 p-3 shadow g-2 mt-4 mx-auto ">
          <h2>User Login</h2>

          <div className="col-12">
            <input
              type="text"
              placeholder="Enter your email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="col-12">
            <input
              type="text"
              placeholder="Enter your password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
          <div>
            <p>
              New user? <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
