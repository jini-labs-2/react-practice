import './App.css';
import UserComponent from './UserComponent';
import useFetch from './hooks/useFetch';

function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <div className="App">
      <h2>ユーザ一覧</h2>
      <UserComponent users={users} />
    </div>
  );
}

export default App;
