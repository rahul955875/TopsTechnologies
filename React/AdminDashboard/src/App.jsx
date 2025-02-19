import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.js'

import "./App.css";
import AdminLogin from "./components/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router";
import { LoginService } from "./components/service/LoginService";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <>
      {/* <AdminLogin /> */}
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<AdminLogin />} />
          <Route path="/Home" element={<LoginService />}>
            <Route index element={<Home />} />
            <Route path="/Home/product" element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
