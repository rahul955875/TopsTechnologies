import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Components/HomePage";
import AboutPage from "./Components/AboutPage";
import Navigation from "./Navigation";

function App() {
  return (
    <>
    {/* task 1  (Routing in React)*/}
      <Router>
        <Routes>
            {/* task2 create navigation bar */}
          <Route element={<Navigation/>} path="/"></Route>
          <Route element={<HomePage />} path="/Home"></Route>
          <Route element={<AboutPage />} path="/About"></Route>
          <Route element={<Contact />} path="/Contact"></Route>
          <Route element={<PageNotfound />} path="*"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
