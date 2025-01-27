import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import TopHeading from "./Components/TopHeading";
import NavHead from "./Components/Header/NavHead";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NoPage from "./Components/NoPage";
function App() {
  return <>
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<TopHeading />}>
  <Route index element={<NavHead/>} />
  <Route path="*" element={<NoPage/>}/>
  </Route>
 </Routes>
 </BrowserRouter>
  </>;
}

export default App;
