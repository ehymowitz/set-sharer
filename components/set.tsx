import React, { useContext } from 'react'
import CreateSetForm from './createSetForm'
import LoginForm from './LoginForm'
import Songs from './songs'
import AddSongForm from './addSongForm'
import LogoutButton from './logoutButton'
import { LoggedIn } from '../pages/_app'

const Set = () => {
    const { loggedIn } = useContext(LoggedIn)

  if (loggedIn == "") {
    return (
      <div className= "not-logged-in">
        <CreateSetForm />
        <LoginForm />
        <h3>WARNING: This tool is very much in development. When you put information on here it very well could be deleted if I mess somthing up. So back up your data.</h3>
        <h3>I'm making this tool as a musician and for musicians, so if you have any suggestions for features feel free to reach me at ehymowitz@gmail.com </h3>
      </div>
    )
  } else {
    return (
      <div className= "logged-in">
        <h1>{loggedIn}</h1>
        <Songs/>
        <AddSongForm/>
        <LogoutButton />
      </div>
    )
  }
}

export default Set
