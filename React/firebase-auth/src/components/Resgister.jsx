import React, { useState } from "react";
import { auth, db } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((registerUser) => {
        const newUser = registerUser.user;
        return setDoc(doc(db, "registeredUser", newUser.uid), {
          email: newUser.email,
          name: user.name,
        });
      })
      .then(() => {
        alert("Regiseter successfully.");
        setUser({ name: "", email: "",password : '' });
        navigate('/')
      })
      .catch((e) => alert("registration failed.", e));
  };
  return (
    <>
      <form className="container " onSubmit={handleSubmit}>
        <div className="row col-6 p-3 shadow g-2 mt-4 mx-auto ">
          <h2>User Resgistration</h2>
          <div className="col-12">
            <input
              type="text"
              placeholder="Enter your Name"
              className="form-control"
              value={user.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="col-12">
            <input
              type="email"
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
              
            >
              Submit
            </button>
          </div>
          <div>
            <p>Alerdy Registered <Link to='/'>Login</Link></p>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
