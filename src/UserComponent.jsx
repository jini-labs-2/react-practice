import React from 'react'

export default function UserComponent(props) {
  const {users} = props;
  return (
    <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>USER NAME</th>
              <th>E-MAIL</th>
              <th>ADDRESS</th>
              <th>PHONE</th>
              <th>WEB</th>
              <th>COMPANY</th>
            </tr>
          </thead>
        <tbody>
          {users ? users.map((user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address?.city}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company?.name}</td>
            </tr>
          )) : "表示できるデータが有りません。"}
        </tbody>
      </table>
    </div>
  )
}
