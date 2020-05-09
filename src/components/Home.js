import React, { useContext } from "react"
import AwooServices from "../services/AwooServices"
import AuthContext from "../contexts/AuthContext"

const Home = () => {
  const { logoutUser } = AwooServices
  const { setUser } = useContext(AuthContext)

  const onClickLogout = () => logoutUser().then(() => setUser())

  return (
    <div className="Home">
      <h1>I LOVE YOU</h1>
      <div onClick={onClickLogout}>Logout</div>
    </div>
  )
}

export default Home
