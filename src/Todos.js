import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

const Todos = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
  }, [])

  return (
    <div>
      <table>
        <caption>
          [ todos from jsonplaceholder ]
        </caption>
        <thead>
          <tr>
            <th>id</th>
            <th>userID</th>
            <th>title</th>
            <th>complet</th>
          </tr>
        </thead>
        <tbody>
          {todos ?  todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.title}</td>
            <td>{todo.complete}</td>
          </tr>
          )) : null }
        </tbody>
      </table>
    </div>
  )
}

export default Todos