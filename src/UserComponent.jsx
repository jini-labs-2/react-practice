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
                <td style={{textAlign: "left"}}>{user.id}</td>
                <td style={{textAlign: "left"}}>{user.name}</td>
                <td style={{textAlign: "left"}}>{user.username}</td>
                <td style={{textAlign: "left"}}>{user.email}</td>
                <td style={{textAlign: "left"}}>{user.address?.city}</td>
                <td style={{textAlign: "left"}}>{user.phone}</td>
                <td style={{textAlign: "left"}}>{user.website}</td>
                <td style={{textAlign: "left"}}>{user.company?.name}</td>
            </tr>
          )) : "表示できるデータが有りません。"}
        </tbody>
      </table>
    </div>
  )
}
