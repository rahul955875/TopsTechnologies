import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import store from "./store";
import AddTodos from "./components/AddTodos";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <Provider store={store}>
    // <Counter/>
    // <AddTodos/>
    // </Provider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Provider store={store}>
              <Counter />
            </Provider>
          }
        ></Route>
        <Route
          path="/task2"
          element={
            <Provider store={store}>
              <AddTodos />
            </Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
