import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos : [{id: 1, text : 'first Task.'}]
}

exporte const todoSlice = createSlice({
    name : 'todoList',
    initialState,
    reducers : {
        addTodo : (state, action)=>{
            const todo ={
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo)
        }
    }
})
export default todoSlice.reducer