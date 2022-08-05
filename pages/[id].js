import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import DefaultInput from '../components/input/DefaultInput'
import PrimaryButton from '../components/button/PrimaryButton'
import { todosValue, update } from '../app/todoReducer'

function Edit() {
  const router = useRouter()
  const [title, setTitle] = useState()

  const { id } = router.query

  const { todos } = useSelector(todosValue)
  let currentTodo = {}

  if (todos != undefined) {
    currentTodo = todos.filter(todo => todo.id == id)[0]
  }

  // Redux
  const dispatch = useDispatch()

  function updateTodoHandler(e) {
    e.preventDefault()

    const updatedTodo = {
      ...currentTodo,
      title,
    }

    const editTodoIndex = todos.findIndex(todo => todo.id == id)

    dispatch(
      update({
        editTodoIndex,
        updatedTodo,
      })
    )

    router.back()
  }

  return (
    <form onSubmit={updateTodoHandler}>
      <DefaultInput
        placeholder='What are you going to do?'
        value={title ?? currentTodo.title}
        onChange={e => setTitle(e.target.value)}
      />

      <PrimaryButton label='Update' onClick={updateTodoHandler} />
    </form>
  )
}

export default Edit
