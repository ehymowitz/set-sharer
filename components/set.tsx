import React, { useContext } from 'react'
import CreateSetForm from './createSetForm'
import SetLoginForm from './setLoginForm'
import { LoggedIn } from '../pages/_app'

const Set = () => {

  const { loggedIn } = useContext(LoggedIn)

  if (!loggedIn) {
    return (
      <div>
        <p>todo: create gig and login forms</p>
        <CreateSetForm />
        <SetLoginForm />
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
