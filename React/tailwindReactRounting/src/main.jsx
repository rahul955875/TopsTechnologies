import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PageNotfound from "./Components/PageNotfound";
const wait = (time) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, time);
  });
};
const HomePage = lazy(() =>
  wait(1000).then(() => import("./Components/HomePage"))
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<App />} path="/">
          <Route element={<HomePage />} path="/Home"></Route>
          <Route element={<About />} path="/About"></Route>
          <Route element={<Contact />} path="/Contact"></Route>
          <Route element={<PageNotfound />} path="*"></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
