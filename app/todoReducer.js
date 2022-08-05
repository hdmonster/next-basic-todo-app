import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  // yg ubah" state di redux lah intinya
  reducers: {
    add: (state, action) => {
      state.todos = [...state.todos, action.payload]
    },
    update: (state, action) => {
      const { editTodoIndex, updatedTodo } = action.payload

      const updatedTodos = [...state.todos]
      updatedTodos[editTodoIndex] = updatedTodo

      state.todos = updatedTodos
    },
    remove: (state, action) => {
      let currentTodo = action.payload

      let filteredTodos = state.todos.filter(todo => todo.id != currentTodo.id)

      state.todos = filteredTodos
    },
  },
})

export const { add, update, remove, markAsDone } = todoSlice.actions

// Selectors
export const todosValue = state => state.todos.todos

export default todoSlice.reducer
