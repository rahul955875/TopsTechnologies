import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Login from "./components/Login";
import Resgister from "./components/Resgister";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/la" element={<Login />}></Route>
          <Route path="/" element={<Resgister />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
