import { useState } from "react"

export default function App() {


  const [todos, setTodos] = useState([
    { id: 1, title: 'Купить молоко', completed: false },
    { id: 2, title: 'Накормить кота', completed: true },
    { id: 3, title: 'Забрать зарплату', completed: true },
  ])

  const [newTodo, setNewTodo] = useState('')

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {

        if (todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo
      })
    )
  }

  function addTodo() {
    setTodos(
      [
        ...todos,
        { id: todos.length + 1, title: newTodo, completed: false }
      ]
    )
  }

  return (
    <div>
      <h1>ToDo лист</h1>

      {
        todos.map(todo => (
          <div className={todo.completed ? 'striked' : ''}>
            <input onChange={() => toggleTodo(todo.id)} checked={todo.completed} type="checkbox" />
            <span>{todo.title}</span>
          </div>
        ))
      }

      <h2>Добавить дело</h2>

      <input type="text" value={newTodo} onInput={(event) => setNewTodo(event.target.value)} placeholder="Введите название дела" />
      <button onClick={() => addTodo()}>Добавить</button>


    </div>
  )

}


