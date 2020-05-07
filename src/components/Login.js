import React, { useState, useEffect, useContext } from "react"
import { Link, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import AwooServices from "../services/AwooServices"
import "../styles/Login.css"
import AuthContext from "../contexts/AuthContext"

const Login = () => {
  const { loginUser, socialLoginUser } = AwooServices
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

  const onClickSocialLogin = (e) => socialLoginUser()
    .then((user) => {
      setUser(user)
      setSuccess(true)
    })
    .catch(e => console.log(e))

  //Check that there weren't errors, then set success to true
  useEffect(() => {
    if (loading && !error)
      loginUser(data).then(
        () => {
          setSuccess(true)
          setState({ error: false, loading: false })
        },
        () => setState({ error: true, loading: false })
      )
  }, [data, error, loading, loginUser])

  //If there were errors, show it
  const errorClassName = error ? "invalid" : ""

  if (success) return <Redirect to="/home"/>

  return (
    <div className="Login">
      <Navbar />
      <div className="login-container">
        <div className="login">
          <h1>Iniciar sesión</h1>
          <div className="register-container">
            <p>¿No eres miembro todavía?</p>
            <Link to="/register" className="register">
              Registrarse
            </Link>
          </div>
          <hr />
          <form className="login-form" onSubmit={handleSubmit}>
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
            <input
              type="submit"
              value="Iniciar sesión"
              className="login-button"
            />
          </form>
          <h2 className="or"><span>ó</span></h2>
          <div className="google" onClick={onClickSocialLogin}>
            <img alt="" src="/images/google.svg" />
            <p>Iniciar sesión con Google</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
