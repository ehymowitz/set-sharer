import React, { useState, useContext, SyntheticEvent, ChangeEvent } from 'react'
import { createSet } from '../../utils/crud'
import { LoggedIn } from '../../pages/_app'
import { useQueryString } from '../../utils/queryString'

const CreateSetForm = () => {
  const [setName, changeSetName] = useState("")
  const [set, changeSet] = useQueryString("set")
  const { setLoggedIn } = useContext(LoggedIn)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    createSet({name: setName})
    setLoggedIn(setName)
    changeSet(setName)
    changeSetName("")
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSetName(e.target.value)
  }

  return (
    <div className="create-set-form">
      <h1>Create a Set</h1>
      <form
        onSubmit = { (e) => handleSubmit(e) }
      >
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

export default CreateSetForm
