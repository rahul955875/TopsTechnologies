import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Props from './PropDes/Props';
import Navbar from './Navigation/Navbar';
import Card from './CardComponent/Card';
import StateEx from './StateMange/StateMange'
import IfStatement from './Conditionals/IfStatement';
import ShowTable from './Table/ShowTable';
// import Nav from './component/Navbar/Nav';
// import Heroimg from './component/HeroImg/Heroimg';
// import Footer from './component/Footer/Footer';
// import ImgImport from './component/ImgImport';
// import PropEx from './component/PropEx';
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
    {/* <Nav/> */}
    {/* <Heroimg /> */}
    {/* <Footer /> */}
    {/* <ImgImport /> */}
    {/* <PropEx /> */}
    {/* <Props   /> */}
    <Navbar logoname='ImgGallery'  />
    {/* <Card /> */}
  {/* <StateEx/> */}
  {/* <IfStatement name={'rahul'}/> */}
  <ShowTable />
    </>
  );
}

export default App;
