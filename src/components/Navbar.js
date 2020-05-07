import React, { useContext, useState, useEffect } from "react"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import AuthContext from "../contexts/AuthContext"

const Navbar = ({ history }) => {
  const { currentUser } = useContext(AuthContext)
  const [isUserLogged, setIsUserLogged] = useState(currentUser !== null)
  const path = window.document.location.pathname

  //If user is logged or he is at login, don't show login-container
  const loginContainerStyle =
    isUserLogged || path === "/login" ? { display: "none" } : {}

  //If currentUser changes, update isUserLogged
  useEffect(() => setIsUserLogged(currentUser !== null), [currentUser])

  //Go to the last position in browser history when click on logo
  const onClickRedirect = () => window.history.back()

  return (
    <div className="Navbar">
      <div className="logo-container" onClick={onClickRedirect}>
        <img alt="" src="/images/coffee.png" className="logo" />
        <h1 className="logo-title">Awoo</h1>
      </div>
      <div className="login-container" style={loginContainerStyle}>
        <p>¿Ya tienes una cuenta?</p>
        <Link className="login-button" to="/login">
          Iniciar sesión
        </Link>
      </div>
    </div>
  )
}

export default Navbar
