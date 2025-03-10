import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from "./components/Login";
import Resgister from "./components/Resgister";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Resgister />}></Route>
          <Route path="/Home" element={<Home /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
