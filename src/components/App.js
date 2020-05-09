import React from "react"
import { Switch, Route } from "react-router-dom"
import Welcome from "./Welcome"
import Register from "./Register"
import Home from './Home'
import "../styles/App.css"
import AuthenticatedRoute from "./AuthenticatedRoute"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Welcome} />
        <AuthenticatedRoute exact path="/register" component={Register} />
        <AuthenticatedRoute exact path="/home" component={Home} />
      </Switch>
    </div>
  )
}

export default App
