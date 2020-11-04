import React, { useContext } from 'react'
import { DisplayedSong } from '../pages/index'
import { LoggedIn } from '../pages/_app'

const logoutButton = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn)
  const { setDisplayedSong } = useContext(DisplayedSong)

  const handleClick = () => {
    setDisplayedSong(undefined)
    setDisplayedSong({artist: "", title: ""})
    setLoggedIn("")
    sessionStorage.removeItem('setSharerSet')
  }

  return (
    <div className = "logout-button">
      <button onClick = {() => handleClick()}>
        Log Out from {loggedIn}
      </button>
    </div>
  )
}

export default logoutButton
