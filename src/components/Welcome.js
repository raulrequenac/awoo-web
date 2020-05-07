import React from 'react'
import Navbar from './Navbar'
import '../styles/Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className="Welcome">
      <Navbar />
      <div className="content">
        <h1>Conoce. Chatea. Descubre.</h1>
        <p>Crea o únete a un evento para probar algo nuevo, hacer lo que más te gusta o conocer gente con tus mismos gustos incluso antes de asistir.</p>
        <Link className="join" to="/register"><span>Unirse a Awoo</span></Link>
      </div>
    </div>
  )
}

export default Welcome