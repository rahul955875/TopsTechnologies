import React from "react";
import { Navigate, Outlet } from "react-router";
import Navigation from "../Navigation";

export const LoginService = () => {
  const auth = localStorage.getItem("LoginAdmin");
  
  return auth ? (
    <>
      <Navigation />
      <Outlet />
    </>
  ) : (
    <Navigate to="/" />
  );
};
