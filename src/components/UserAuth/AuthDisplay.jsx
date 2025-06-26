import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AuthDisplay() {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth.userAuth ? 'ログイン中':'ログアウト中'}
    </div>
  )
}

export default AuthDisplay