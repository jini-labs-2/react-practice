import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {setUsers(res.data)})
  }, [])
  
  return (
    <div>
      <table>
        <caption>
          [ users from jsonplaceholder ]
        </caption>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          {users ?  users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
          </tr>
          )) : null }
        </tbody>
      </table>
    </div>
  )
}

export default Users;
