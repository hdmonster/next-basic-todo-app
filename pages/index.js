import Head from 'next/Head'
import styles from '../styles/Home.module.css'
import TodoList from '../components/TodoList'
import { useTodosContext } from '../context/todos'
import { useSelector } from 'react-redux'
import { todosValue } from '../app/todoReducer'

function Home() {
  // Context
  // const [todos, setTodos] = useTodosContext()

  // Redux
  // state.todos, todos diambl dari nama reducer di store.js
  const todos = useSelector(todosValue)

  return (
    <>
      <Head>
        <title>Basic Todo</title>
      </Head>
      <div className={styles.container}>
        <TodoList todos={todos} />
      </div>
    </>
  )
}

export default Home
