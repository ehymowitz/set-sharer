import React, { useState, useContext } from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'
import { LoggedIn } from '../pages/_app'

const CreateGigForm = () => {
  const [gigName, setGigName] = useState("")
  const [password, setPassword] = useState("")
  const [choice, setChoice] = useState(true)
  const { setLoggedIn } = useContext(LoggedIn)

  const logIn = () => {
    setLoggedIn(true)
  }

  return (
    <div className="gig-form">
      <form
        onSubmit={ async (e) => {
          e.preventDefault()
          if (gigName.length === 0 || password.length === 0) {
            alert(
              "You can't have a blank Gig Name or Password"
            )
          }
          const { data, error } = await fetcher(
            `/api/${choice ? "login" : "create" }`,
            {
              gigName,
              password
            }
          )
          if (error) {
            alert(error)
            return
          }
          await mutate("/api/set")
          logIn()
        }}
      >
        <div className="inputs">
          <input
          value = {gigName}
          onChange= {e =>setGigName(e.target.value)}
          placeholder = "Gig Name"
          />
          <input
          value = {password}
          onChange= {e =>setPassword(e.target.value)}
          placeholder = "Password"
          />
          <input type="submit" value = {choice ? "View a gig" : "Create a gig"}/>
        </div>
      </form>
      <a onClick= { () => setChoice(!choice)}>
        Want to create a gig? Click here
      </a>
    </div>
  )
}

export default CreateGigForm
