import React, { useState, useContext } from 'react'
import { LoggedIn } from '../pages/_app'
import { readSets } from '../utils/crud'

const LoginForm = () => {
  const [setName, changeSetName] = useState("")
  const { setLoggedIn, loggedIn } = useContext(LoggedIn)

  const handleSubmit = () => {

  }
  // handle the async response from readSets here - compare to input on form

  const handleChange = (e) => {
    changeSetName(e.target.value)
  }

  return (
    <div className="set-login-form">
      <h1>Log in to see a Set</h1>
      <form>
        <div className="inputs">
          <input
            placeholder = "Set Name"
            value = { setName }
            onChange = { (e) => handleChange(e) }
          />
          <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
