import React, { useState } from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const CreateGigForm = () => {
  const [gigName, setGigName] = useState("")
  const [password, setPassword] = useState("")
  const [choice, setChoice] = useState(false)

  return (
    <div>
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
            console.log(error)
            return
          }
          await mutate("api/set")
        }}
      >
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
      </form>
      <button onClick= { () => setChoice(!choice)}>
        change
      </button>
    </div>
  )
}

export default CreateGigForm
