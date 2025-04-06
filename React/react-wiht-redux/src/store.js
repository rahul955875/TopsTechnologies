import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Features/counterSlice'
import todosSlice from "./Features/todoSlice";
 const store = configureStore({
    reducer : {
        count :  counterSlice.reducer,
        todos : todosSlice.reducer
    }
 });
 export default store
