import { useEffect, useState } from 'react';
import './App.css';
import UserComponent from './UserComponent';

function App() {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
    });
  },[])
  return (
    <div className="App">
      <h2>ユーザ一覧</h2>
      <UserComponent users={users} />
    </div>
  );
}

export default App;
