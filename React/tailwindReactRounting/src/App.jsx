
// import './App.css'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import Contact from "./Components/Contact"
import PageNotfound from './Components/PageNotfound';
function App() {


  return (
    <>
      <Router>
        <ul className='flex gap-8 px-4 py-2 '>
          <li><Link to="/">Main</Link></li>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/unrelatedAddress">Not found</Link></li>
        </ul>
        <Routes>
          <Route element="" path='/'></Route>
          <Route element={<HomePage />} path='/Home'></Route>
          <Route element={<About />} path='/About'></Route>
          <Route element={<Contact />} path='/Contact'></Route>
          <Route element={<PageNotfound />} path='*'></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
