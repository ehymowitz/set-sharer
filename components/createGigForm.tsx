import React, { useState } from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const CreateGigForm = () => {
  const [gigName, setGigName] = useState("")
  const [password, setPassword] = useState("")
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <form
        onSubmit={async e => {
          e.preventDefault()
          if (gigName.length === 0 || password.length === 0) {
            alert(
              "You can't have a blank Gig Name or Password"
            )
          }
          setLoading(true)
          const { data, error } = await fetcher(
            `/api/${login ? "login" : "create" }`,
            {
              gigName,
              password
            }
          )
          if (error) {
            console.log(error)
            setLoading(false)
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
        <input type="submit" value={login ? "View a gig" : "Create a gig"}/>
      </form>
    </div>
  )
}

export default CreateGigForm
