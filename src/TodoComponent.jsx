import React from 'react'

export default function TodoComponent(props) {
  const {todos} = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>USER ID</td>
            <td>ID</td>
            <td>TITILE</td>
            <td>COMPLETED</td>
          </tr>
        </thead>
        <tbody>
          {todos ? todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.completed}</td>
              <td>{todo.userId}</td>
              <td>{todo.id}</td>
              <td style={{textAlign: 'left'}}>{todo.title}</td>
            </tr>
          )): "表示するデータが有りません。" }
        </tbody>
      </table>
    </div>
  )
}
