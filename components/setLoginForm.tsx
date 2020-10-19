import React from 'react'

const SetLoginForm = () => {

  return (
    <div className="set-login-form">
      <h1>Login to see a Set</h1>
      <form>
        <div className="inputs">
          <input
            placeholder = "Set Name"
          />
          <input type="submit"/>
        </div>
      </form>
    </div>
  )
}

export default SetLoginForm
