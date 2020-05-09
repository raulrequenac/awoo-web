import React, { useState, useContext, useEffect } from "react"
import Navbar from "./Navbar"
import "../styles/Welcome.css"
import { Link } from "react-router-dom"
import Login from "./Login"
import AwooServices from "../services/AwooServices"
import AuthContext from "../contexts/AuthContext"
import Register from "./Register"

const Welcome = () => {
  const [displayLogin, setDisplayLogin] = useState(false)
  const [displayRegister, setDisplayRegister] = useState(false)
  const { currentUser } = AwooServices
  const { setUser } = useContext(AuthContext)

  useEffect(() => {
    currentUser().then((user) => setUser(user.data || null))
  }, [currentUser, setUser])

  const style = () => displayLogin ? {} : { display: "none" }

  return (
    <div className="Welcome">
      <Navbar setDisplayLogin={setDisplayLogin} />
      <Login display={style(displayLogin)} setDisplay={setDisplayLogin} />
      <Register display={style(displayRegister)}/>
      <div className="content">
        <h1>Conoce. Chatea. Descubre.</h1>
        <p>
          Crea o únete a un evento para probar algo nuevo, hacer lo que más te
          gusta o conocer gente con tus mismos gustos incluso antes de asistir.
        </p>
        <div className="join" to="/register" onClick={onClickDisplayRegister}>
          <span>Unirse a Awoo</span>
        </div>
      </div>
    </div>
  )
}

export default Welcome
