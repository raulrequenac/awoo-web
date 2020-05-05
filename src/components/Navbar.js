import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo-container">
        <img alt="" src="/images/coffee.png" className="logo"/>
        <h1 className="logo-title">Awoo</h1>
      </div> 
      <div className="join-container">
        <p>¿Ya tienes una cuenta?</p>
        <Link className="login-button" to="/login">Iniciar sesión</Link>
      </div>
    </div>
  )
}

export default Navbar