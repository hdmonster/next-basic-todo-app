import TodoItem from './TodoItem'

function TodoList({ todos }) {
  return (
    <>
      {todos.length > 0 ? (
        todos.map(todo => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <div>Click the Add Button to add your first todo list</div>
      )}
    </>
  )
}

export default TodoList
