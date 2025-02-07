import React from "react";
import { Navigate, Outlet } from "react-router";

const LoginService = () => {
  const loginUser = JSON.parse(localStorage.getItem("loginUser"));
  return <>{loginUser ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LoginService;
