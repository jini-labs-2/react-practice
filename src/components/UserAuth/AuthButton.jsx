import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AuthButton() {
  const auth = useContext(AuthContext);
  console.log('auth -> ', auth);
  return (
    <div>
      <button>{auth ? 'Logout': 'Login'}</button>
    </div>
  )
}

export default AuthButton