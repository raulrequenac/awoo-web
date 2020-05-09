import React, { useState } from "react"
import Navbar from "./Navbar"
import "../styles/Welcome.css"
import { Link } from "react-router-dom"
import Login from "./Login"

const Welcome = () => {
  const [displayLogin, setDisplayLogin] = useState(false)
  //const [displayRegister, setDisplayRegister] = useState(false)

  const styleLogin = displayLogin ? {} : { display: "none" }

  return (
    <div className="Welcome">
      <Navbar setDisplayLogin={setDisplayLogin} />
      <Login display={styleLogin} setDisplay={setDisplayLogin}/>
      <div className="content">
        <h1>Conoce. Chatea. Descubre.</h1>
        <p>
          Crea o únete a un evento para probar algo nuevo, hacer lo que más te
          gusta o conocer gente con tus mismos gustos incluso antes de asistir.
        </p>
        <Link className="join" to="/register">
          <span>Unirse a Awoo</span>
        </Link>
      </div>
    </div>
  )
}

export default Welcome
