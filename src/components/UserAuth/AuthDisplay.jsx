import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AuthDisplay() {
  const auth = useContext(AuthContext);
  return (
    <div>
      {auth ? 'ログアウト中':'ログイン中'}
    </div>
  )
}

export default AuthDisplay