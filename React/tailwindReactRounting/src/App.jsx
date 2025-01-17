
import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import Contact from "./Components/Contact"
function App() {


  return (
    <>
      <Router>
        <ul>
          <li><Link to="">Main</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
        <Routes>
          <Route element="" path='/'></Route>
          <Route element={<HomePage />} path='/Home'></Route>
          <Route element={<About />} path='/About'></Route>
          <Route element={<Contact />} path='/Contact'></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
