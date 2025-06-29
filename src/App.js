import './App.css';
import TodoComponent from './TodoComponent';
import UserComponent from './UserComponent';
import useFetch from './hooks/useFetch';

function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users")
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos")

  return (
    <div className="App">
      <h2>ユーザ一覧</h2>
      <UserComponent users={users} />

      <hr/>
      <h2>Todo一覧</h2>
      <TodoComponent todos={todos} />
    </div>
  );
}

export default App;
