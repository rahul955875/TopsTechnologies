import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '..Feautes/todoSlice'
export const store = configureStore({
    reducer : {
        todos : todoSlice,
    }
})