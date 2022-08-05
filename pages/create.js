import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTodosContext } from '../context/todos'
import { useDispatch } from 'react-redux'

import DefaultInput from '../components/input/DefaultInput'
import PrimaryButton from '../components/button/PrimaryButton'
import { add } from '../app/todoReducer'

function Create() {
  const router = useRouter()
  const [title, setTitle] = useState()

  // Context
  // const [todos, setTodos] = useTodosContext()

  function uniqueId() {
    return Date.now()
  }

  // Context
  // function saveTodo(e) {
  //   e.preventDefault()

  //   setTodos([
  //     ...todos,
  //     {
  //       id: uniqueId(),
  //       title,
  //       isDone: false,
  //     },
  //   ])

  //   setTitle('')

  //   router.back()
  // }

  // Redux
  const dispatch = useDispatch()

  function saveTodoHandler(e) {
    e.preventDefault()

    dispatch(
      add({
        id: uniqueId(),
        title,
        isDone: false,
      })
    )

    router.back()
  }

  return (
    <form onSubmit={saveTodoHandler}>
      <DefaultInput
        placeholder='What are you going to do?'
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <PrimaryButton label='Add' onClick={saveTodoHandler} />
    </form>
  )
}

export default Create
