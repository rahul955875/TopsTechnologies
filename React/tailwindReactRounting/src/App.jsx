import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Outlet,
} from "react-router-dom";
// import HomePage from "./Components/HomePage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PageNotfound from "./Components/PageNotfound";
import Counter from "./Components/useStateHook/Counter";
import Example2 from "./Components/useStateHook/Example2";
import Employee from "./Components/useStateHook/Employee";
import Student from "./Components/useStateHook/Student";
import UseEffectFetch from "./Components/UseEffect/UseEffectFetch";
import Timer from "./Components/UseEffect/Timer";
import UseRefVideo from "./Components/UseRef/UseRefVideo";
import UseContextEx from "./Components/UseContext/UseContextEx";
import ReducerArith from "./Components/useReducer/ReducerArith";
import FetchData from "./Components/FetchData";
import RenderList from "./Components/Assignment/RenderList";
import Hooks from "./Components/Assignment/Hooks";
import HandlingEvnetsAndConditionals from "./Components/Assignment/HandlingEvnetsAndConditionals";
import { lazy, Suspense } from "react";
function App() {
  return (
    <>
      {/* <Router> */}
        <ul className="flex gap-8 px-4 py-2 ">
          <li>
            <NavLink >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'text-blue-700 underline' : ' '}
              to="/Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'text-blue-700 underline' : ' '}
              to="/Contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'text-blue-700 underline' : ' '}
              to="/About"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'text-blue-700 underline' : ' '}
              to="/unrelatedAddress"
            >
              Not found
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<p className="text-4xl text-blue-800">Loading ...</p>}>

        <Outlet/>
        </Suspense>
        {/* <Counter/>
        {/* <Example2/> */}
        {/* <Employee/> */}
        {/* <Student/> */}
        {/* <UseEffectFetch/> */}
        {/* <Timer/> */}
        {/* <UseRefVideo /> */}
        {/* <UseContextEx/> */}
        {/* <ReducerArith/> */}
        {/* <FetchData/> */}
        {/* <RenderList/> */}
        {/* <Hooks/> */}
        {/* <HandlingEvnetsAndConditionals/> */}
        
        {/* <Routes>
          <Route element="" path="/"></Route>
          <Route element={<HomePage />} path="/Home"></Route>
          <Route element={<About />} path="/About"></Route>
          <Route element={<Contact />} path="/Contact"></Route>
          <Route element={<PageNotfound />} path="*"></Route>
        </Routes> */}
      {/* </Router> */}
    </>
  );
}

export default App;
