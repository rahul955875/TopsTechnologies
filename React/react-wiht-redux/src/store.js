import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './Features/counterSlice'
 const store = configureStore({
    reducer : {
        count :  counterSlice.reducer
    }
 });
 export default store
