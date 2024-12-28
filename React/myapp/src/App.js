import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './component/Navbar/Nav';
import Heroimg from './component/HeroImg/Heroimg';
import Footer from './component/Footer/Footer';
// import ClassEx from './component/classEx';
// import FunctionEX from './component/FunctionEX';
// import { Fragment } from 'react';
// import Nav from './component/Navbar/Nav';

function App() {
  return (
    <>  
    {/* <div className='heading'>Hello React !</div>  */}
    {/* <FunctionEX></FunctionEX> */}
    {/* <ClassEx></ClassEx> */}
    <Nav/>
    <Heroimg />
    <Footer />
    </>
  );
}

export default App;
