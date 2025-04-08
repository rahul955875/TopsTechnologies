import { createSlice, nanoid } from "@reduxjs/toolkit";

const LocalTodos = JSON.parse(localStorage.getItem("todosKey"));
const initialState = {
  todos: LocalTodos?.length
    ? LocalTodos
    : [{ id: 1, text: "wakeup first!!!", completed: false }],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
      localStorage.setItem("todosKey", JSON.stringify(state.todos));
    },
    editTodos: (state, action) => {
      const { editId, updatedText } = action.payload;
      const updateTodo = state.todos.findIndex((todo) => todo.id === editId);
      if (updateTodo !== -1) {
        state.todos[updateTodo].text = updatedText;
      }
      localStorage.setItem("todosKey", JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todosKey", JSON.stringify(state.todos));
    },
    todoCompleted: (state, action) => {
      const completdTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (completdTodo) {
        completdTodo.completed = !completdTodo.completed;
        localStorage.setItem("todosKey", JSON.stringify(state.todos));
      }
    },
  },
});

export default todosSlice;
export const { addTodo, editTodos, removeTodo, todoCompleted } =
  todosSlice.actions;
