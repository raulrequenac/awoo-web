import React from "react"
import { Switch } from "react-router-dom"
import Welcome from "./Welcome"
import Home from "./Home"
import "../styles/App.css"
import AuthenticatedRoute from "./AuthenticatedRoute"
import NotAuthenticatedRoute from "./NotAuthenticatedRoute"

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthenticatedRoute exact path="/" component={Welcome} />
        <NotAuthenticatedRoute exact path="/home" component={Home} />
      </Switch>
    </div>
  )
}

export default App
