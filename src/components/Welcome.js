import React, { useState, useContext, useEffect } from "react"
import Navbar from "./Navbar"
import "../styles/Welcome.css"
import Login from "./Login"
import AwooServices from "../services/AwooServices"
import AuthContext from "../contexts/AuthContext"
import Register from "./Register"

const Welcome = () => {
  const [display, setDisplay] = useState({ login: false, register: false })
  const { login, register } = display
  const { currentUser } = AwooServices
  const { setUser } = useContext(AuthContext)

  const style = (display) => (display ? {} : { display: "none" })

  const onClickDisplayRegister = () =>
    setDisplay({ login: false, register: true })

  useEffect(() => {
    currentUser().then((user) => setUser(user.data || null))
  }, [currentUser, setUser])

  return (
    <div className="Welcome">
      <Navbar setDisplay={setDisplay} />
      <Login
        display={style(login)}
        setDisplay={setDisplay}
      />
      <Register
        display={style(register)}
        setDisplay={setDisplay}
      />
      <div className="content">
        <h1>Conoce. Chatea. Descubre.</h1>
        <p>
          Crea o únete a un evento para probar algo nuevo, hacer lo que más te
          gusta o conocer gente con tus mismos gustos incluso antes de asistir.
        </p>
        <div
          className="join-button"
          to="/register"
          onClick={onClickDisplayRegister}
        >
          <span>Unirse a Awoo</span>
        </div>
      </div>
    </div>
  )
}

export default Welcome
