import React, { useContext } from 'react'
import CreateSetForm from './forms/createSetForm'
import LoginForm from './forms/LoginForm'
import SongList from './songList'
import AddSongForm from './forms/addSongForm'
import LogoutButton from './buttons/logoutButton'
import { LoggedIn } from '../pages/_app'

const SidePanel = () => {
    const { loggedIn } = useContext(LoggedIn)

  if (loggedIn == "") {
    return (
      <div className= "not-logged-in">
        <CreateSetForm />
        <LoginForm />
        <p>WARNING: This tool is very much in development. When you put information on here it very well could be deleted if I mess somthing up. So back up your data.</p>
        <p>I'm making this tool as a musician and for musicians, so if you have any suggestions for features feel free to reach me at ehymowitz@gmail.com </p>
      </div>
    )
  } else {
    return (
      <div className= "logged-in">
        <h1>{loggedIn}</h1>
        <SongList/>
        <AddSongForm/>
        <LogoutButton />
      </div>
    )
  }
}

export default SidePanel
