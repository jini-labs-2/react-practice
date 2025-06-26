import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AuthButton() {
  const auth = useContext(AuthContext);

  const handleLogin = () => {
    auth.setUserAuth(prev => !auth.userAuth);
  }
  return (
    <div>
      <button onClick={handleLogin}>{auth.userAuth ? 'Logout': 'Login'}</button>
    </div>
  )
}

export default AuthButton