import React, { createContext } from 'react'

export const AuthContext = createContext(false);

const AuthProvider = ({ children }) => {

  return (
    <AuthContext.Provider value={false}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
