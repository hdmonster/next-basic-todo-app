import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoReducer'

export default configureStore({
  // Tergantung berapa reducer yg ada
  reducer: {
    todos: todoReducer,
  },
})
