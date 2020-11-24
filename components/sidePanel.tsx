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
        <small>(Inputs are not case sensitive)</small>
        <p style={{marginTop: '20px'}}>WARNING: This tool is very much in development. When you put information on here it very well could be deleted if I mess somthing up. So back up your data.</p>
        <p>I'm making this tool as a musician and for musicians, so if you have any suggestions for features feel free to reach me at ehymowitz@gmail.com </p>
      </div>
    )
  } else {
    return (
      <div className= "logged-in">
        <div className = "title-and-logout">
          <h1>{loggedIn}</h1>
          <LogoutButton />
        </div>
        <SongList/>
        <AddSongForm/>
      </div>
    )
  }
}

export default SidePanel
