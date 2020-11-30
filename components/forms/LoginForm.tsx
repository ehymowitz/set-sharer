import React, { useState, useContext, SyntheticEvent, ChangeEvent } from 'react'
import { LoggedIn } from '../../pages/_app'
import { readSets } from '../../utils/crud'
import { useQueryString } from '../../utils/queryString'

const LoginForm = () => {
  const [setName, changeSetName] = useState("")
  const setQueryString = useQueryString("set")[1]

  const { setLoggedIn } = useContext(LoggedIn)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    const usedSetName = setName.toLowerCase()
    readSets().then((data) => {
      if (data.includes(usedSetName)) {
        setQueryString(usedSetName)
        setLoggedIn(usedSetName)
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
        onSubmit = { (e) => handleSubmit(e) }
      >
        <div className="inputs">
          <input
            placeholder = "Set Name"
            value = { setName }
            type = "text"
            onChange = { (e) => handleChange(e) }
          />
          <input className="text-button" type="submit" value="Log In"/>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
