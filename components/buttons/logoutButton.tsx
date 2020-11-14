import React, { useContext } from 'react'
import { DisplayedSong } from '../../pages/index'
import { LoggedIn } from '../../pages/_app'
import { useQueryString } from '../../utils/queryString'

const logoutButton = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn)
  const { setDisplayedSong } = useContext(DisplayedSong)
  const setQueryString = useQueryString("set")[1]

  const handleClick = () => {
    setDisplayedSong(undefined)
    setLoggedIn("")
    setQueryString("")
  }

  return (
    <div className = "logout-button">
      <button className = "text-button" onClick = {() => handleClick()}>
        Log Out from {loggedIn}
      </button>
    </div>
  )
}

export default logoutButton
