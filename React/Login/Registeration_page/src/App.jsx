import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import LoginPage from "./component/LoginPage";
import RegisterationPage from "./component/RegisterationPage";
import { Routes, Route, BrowserRouter } from "react-router";
import Home from "./Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Register" element={<RegisterationPage />}></Route>
          <Route path="/Home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <LoginPage /> */}
      {/* <RegisterationPage/> */}
    </>
  );
}

export default App;
