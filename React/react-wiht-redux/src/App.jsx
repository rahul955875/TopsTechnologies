import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import store from "./store";
import AddTodos from "./components/AddTodos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import RecAddTodos from "./components/RecAddTodos";
import Home from "./components/Home";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Counter />}></Route>
            <Route path="/task2" element={<AddTodos />}></Route>
            <Route
              path="/task3"
              element={
                <RecoilRoot>
                  <RecAddTodos />
                </RecoilRoot>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
