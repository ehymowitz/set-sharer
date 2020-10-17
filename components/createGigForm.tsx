import React from 'react'

const CreateGigForm = () => {

  return (
    <div className="gig-form">
      <form>
        <div className="inputs">
          <input
            placeholder = "Gig Name"
          />
          <input
            placeholder = "Password"
          />
          <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default CreateGigForm
