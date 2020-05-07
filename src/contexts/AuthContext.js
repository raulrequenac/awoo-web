import React, { createContext, useState } from 'react'
import AwooServices from '../services/AwooServices'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(JSON.parse(localStorage.getItem('user')))

  const setUser = (user = null) => {
    localStorage.setItem('user', JSON.stringify(user))
    setcurrentUser(user)
  }

  const logout = () => AwooServices.logout()
    .then(() => setUser())
    
  const value = {
    currentUser,
    setUser,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext