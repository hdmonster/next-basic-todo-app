import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, title: 'feed cat', isDone: true },
    { id: 2, title: 'feed dino', isDone: false },
  ])

  return (
    <Context.Provider value={[todos, setTodos]}>{children}</Context.Provider>
  )
}

export function useTodosContext() {
  return useContext(Context)
}
