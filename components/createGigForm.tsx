import React, { useState } from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const CreateGigForm = () => {
  const [gigName, setGigName] = useState("")
  const [password, setPassword] = useState("")
  const [choice, setChoice] = useState(true)

  return (
    <div className="gig-form">
      <form
        onSubmit={async (e) => {
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
          await mutate("api/set")
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
