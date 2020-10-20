import React, { useContext } from 'react'
import CreateSetForm from './createSetForm'
import LoginForm from './LoginForm'
import Songs from './songs'
import LogoutButton from './logoutButton'
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
        <Songs />
        <LogoutButton />
      </div>
    )
  }
}

export default Set
