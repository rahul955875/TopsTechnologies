import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleAuth />}>
          <Route path="Dashboard" element={<App />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
