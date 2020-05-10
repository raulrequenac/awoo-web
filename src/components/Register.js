import React, { useState, useEffect, useContext } from "react"
import { Redirect } from "react-router-dom"
import AwooServices from "../services/AwooServices"
import AuthContext from "../contexts/AuthContext"
import "../styles/Join.css"

const Register = ({ display, setDisplay }) => {
  const { loginUser } = AwooServices
  const { setUser } = useContext(AuthContext)
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    images: [],
    age: "",
  })
  const [imagePreview, setImagePreview] = useState("/images/default.png")
  const [next, setNext] = useState(false)
  const [success, setSuccess] = useState(false)
  const [state, setState] = useState({ error: false, loading: false })
  const { error, loading } = state

  //Save the input when user changes it
  const handleOnChange = (e) => {
    const { name, value, files } = e.target

    if (files) setImagePreview(URL.createObjectURL(files[0]))

    setData({
      ...data,
      [name]: files ? files : value,
    })
  }

  //Change state when submit
  const handleSubmit = (e) => {
    e.preventDefault()
    setState({ error: false, loading: true })
  }

  const onClickExit = () => setDisplay({ login: false, register: false })
  const onClickToggle = () => setNext(!next)
  const onClickDisplayLogin = () => setDisplay({ login: true, register: false })

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
    <div className="Register join" style={display}>
      <div className="join-bg" />
      <div className="exit" onClick={onClickExit}>
        <img alt="" src="/images/exit.svg" />
      </div>
      <div className="join-container">
        <div className="join-button mr-1" onClick={onClickToggle}>
          <img alt="" src="/images/back.svg" className="arrow" />
        </div>
        <div className="center">
          <h1>Registrarse</h1>
          <div className="register-container">
            <p>¿Ya tienes una cuenta?</p>
            <div className="register" onClick={onClickDisplayLogin}>
              Iniciar sesión
            </div>
          </div>
          <hr />
          <form className="join-form adjust-height" onSubmit={handleSubmit}>
            <div
              className="credentials"
              style={next ? { display: "none" } : {}}
            >
              <label className="form-section">
                <p>Nombre:</p>
                <input
                  className={errorClassName}
                  type="text"
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                />
              </label>
              <label className="form-section">
                <p>Correo electrónico:</p>
                <input
                  className={errorClassName}
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                />
              </label>
              <label className="form-section">
                <p>Contraseña:</p>
                <input
                  className={errorClassName}
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                />
              </label>
            </div>
            <div
              className="credentials"
              style={next ? {} : { display: "none" }}
            >
              <label className="form-section center">
                <img alt="" src={imagePreview} className="preview" />
                <input
                  className="d-none"
                  type="file"
                  name="images"
                  onChange={handleOnChange}
                  multiple
                />
              </label>
              <label className="form-section">
                <p>Fecha de nacimiento:</p>
                <input type="date" name="age" onChange={handleOnChange} />
              </label>
              <label className="form-section">
                <p>Sexo:</p>
                <select>
                  <option value="male">Hombre</option>
                  <option value="female">Mujer</option>
                </select>
              </label>
            </div>
            <input type="submit" value="Registrarse" className="join-button" />
          </form>
          <h2 className="or">
            <span>ó</span>
          </h2>
          <a className="social" href="http://localhost:5000/users/login/google">
            <img alt="" src="/images/google.svg" />
            <p>Registrarse con Google</p>
          </a>
          <a
            className="social"
            href="https://awoo-api.herokuapp.com/users/login/facebook"
          >
            <img alt="" src="/images/facebook.svg" />
            <p>Registrarse con Facebook</p>
          </a>
        </div>
        <div className="join-button ml-1" onClick={onClickToggle}>
          <img alt="" src="/images/next.svg" className="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Register
