import React, { useState, useContext, SyntheticEvent, ChangeEvent } from 'react'
import { LoggedIn } from '../../pages/_app'
import { readSets } from '../../utils/crud'

const LoginForm = () => {
  const [setName, changeSetName] = useState("")
  const { setLoggedIn } = useContext(LoggedIn)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    readSets().then((data) => {
      if (data.includes(setName)) {
        setLoggedIn(setName)
        sessionStorage.setItem('setSharerSet', setName)
      } else {
        alert("Invalid Login")
      }
    })
    changeSetName("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSetName(e.target.value)
  }

  return (
    <div className="set-login-form">
      <h1>Log in to see a Set</h1>
      <form
        onSubmit = { (e) => handleSubmit(e) }>
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
