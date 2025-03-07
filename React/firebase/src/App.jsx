import "./App.css";
// import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import AddTodos from "./AddTodos";
import ShowTodos from "./ShowTodos";
import GetTodos from "./GetTodos";
function App() {
  return (
    <>
      <AddTodos/>
      {/* <ShowTodos/> */}
      <GetTodos/>
    </>
  );
}

export default App;
