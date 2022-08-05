import Link from 'next/link'
import styles from '../styles/Home.module.css'
import ActionButton from './button/ActionButton'
import { useSelector, useDispatch } from 'react-redux'
import { todosValue, update, remove } from '../app/todoReducer'

function TodoItem({ todo }) {
  const todos = useSelector(todosValue)

  const dispatch = useDispatch()

  function checkHandler() {
    const updatedTodo = {
      ...todo,
      isDone: todo.isDone ? false : true,
    }

    const editTodoIndex = todos.findIndex(
      currentTodo => currentTodo.id == todo.id
    )

    dispatch(
      update({
        editTodoIndex,
        updatedTodo,
      })
    )
  }

  function removeHandler() {
    dispatch(remove(todo))
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <Link href={'/' + todo.id}>
          <span>{todo.title}</span>
        </Link>

        <div className={styles.actionWrapper}>
          <ActionButton
            type={todo.isDone ? 'done' : 'notDone'}
            action={checkHandler}
          />
          <ActionButton type='delete' action={removeHandler} />
        </div>
      </div>
    </div>
  )
}

export default TodoItem
