import { signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { Outlet, useNavigate } from "react-router-dom";

const GoogleAuth = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("authObj")));
  const navigate = useNavigate();
  const handleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
        localStorage.setItem("authObj", JSON.stringify(res.user));
        navigate("Dashboard");
      })
      .catch((err) => console.log(err));
  };
  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("authObj");
      setUser(null)
      navigate("/");
    });
  };
  return (
    <>
      {!user ? (
        <div className="d-flex justify-content-center">
          <button onClick={handleAuth} className="btn btn-lg m-5 btn-primary">
            ✅Authenticate using Google
          </button>
        </div>
      ) : (
        <div>
          <nav className="p-2">
            <ul className="d-flex justify-content-between list-unstyled align-items-center ">
              <li className="d-flex gap-4 align-items-center">
                <p className="fs-5">Welcome {user.displayName}</p>
                <p>Email : {user.email}</p>
              </li>
              <li>
                <button onClick={handleLogout} className="btn btn-danger">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default GoogleAuth;
