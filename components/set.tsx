import React, { useContext } from 'react'
import CreateSetForm from './createSetForm'
import LoginForm from './LoginForm'
import { LoggedIn } from '../pages/_app'

const Set = () => {

  const { loggedIn } = useContext(LoggedIn)

  if (loggedIn == "") {
    return (
      <div>
        <CreateSetForm />
        <LoginForm />
      </div>
    )
  } else {
    return (
      <div>
        <p>todo: show gig</p>
      </div>
    )
  }
}

export default Set
