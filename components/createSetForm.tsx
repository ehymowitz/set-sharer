import React, { useState } from 'react'
import { createSet } from '../utils/crud'

const CreateSetForm = () => {
  const [setName, changeSetName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    createSet({name: setName })
    changeSetName("")
  }

  const handleChange = (e) => {
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
