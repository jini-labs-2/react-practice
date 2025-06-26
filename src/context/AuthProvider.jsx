import React, { createContext, useState } from 'react'

export const AuthContext = createContext(false);

const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(false);
  return (
    <AuthContext.Provider value={{userAuth, setUserAuth}}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
