import './App.css';
import ClassEx from './component/classEx';
import FunctionEX from './component/FunctionEX';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment className = "body">
    <div className='heading'>Hello React !</div> 
    <FunctionEX></FunctionEX>
    <ClassEx></ClassEx>
    </Fragment>
  );
}

export default App;
