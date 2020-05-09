import React, { useState, useEffect, useContext } from "react"
import { Link, Redirect } from "react-router-dom"
import AwooServices from "../services/AwooServices"
import AuthContext from "../contexts/AuthContext"
import "../styles/Join.css"

const Register = ({ setDisplay }) => {
  const { loginUser } = AwooServices
  const { setUser } = useContext(AuthContext)
  const [data, setData] = useState({ email: "", password: "" })
  const [success, setSuccess] = useState(false)
  const [state, setState] = useState({ error: false, loading: false })
  const { error, loading } = state

  //Save the input when user changes it
  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value,
    })
  }

  //Change state when submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setState({ error: false, loading: true })
  }

  const onClickExit = () => setDisplay(false)

  //Check that there weren't errors, then set success to true
  useEffect(() => {
    if (loading && !error)
      loginUser(data).then(
        (user) => {
          setSuccess(true)
          setState({ error: false, loading: false })
          setUser(user)
        },
        () => setState({ error: true, loading: false })
      )
  }, [data, error, loading, loginUser, setUser])

  //If there were errors, show it
  const errorClassName = error ? "invalid" : ""

  if (success) return <Redirect to="/home" />

  return (
    <div className="Register join">
      <div className="join-bg" />
      <div className="exit" onClick={onClickExit}>
        <img alt="" src="/images/exit.svg" />
      </div>
      <div className="join">
        <h1>Iniciar sesión</h1>
        <div className="register-container">
          <p>¿No eres miembro todavía?</p>
          <Link to="/register" className="register">
            Registrarse
          </Link>
        </div>
        <hr />
        <form className="join-form" onSubmit={handleSubmit}>
          <label className="form-section">
            <p>Correo electrónico:</p>
            <input
              className={errorClassName}
              type="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
            ></input>
          </label>
          <label className="form-section">
            <p>Contraseña:</p>
            <input
              className={errorClassName}
              type="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
            ></input>
          </label>
          <input type="submit" value="Iniciar sesión" className="join-button" />
        </form>
        <h2 className="or">
          <span>ó</span>
        </h2>
        <a className="social" href="http://localhost:5000/users/login/google">
          <img alt="" src="/images/google.svg" />
          <p>Iniciar sesión con Google</p>
        </a>
        <a
          className="social"
          href="https://awoo-api.herokuapp.com/users/login/facebook"
        >
          <img alt="" src="/images/facebook.svg" />
          <p>Iniciar sesión con Facebook</p>
        </a>
      </div>
    </div>
  )
}

export default Register
