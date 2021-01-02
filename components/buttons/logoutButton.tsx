import React, { useContext } from 'react'
import { DisplayedSong } from '../../pages/index'
import { LoggedIn } from '../../pages/_app'
import { useQueryString } from '../../utils/queryString'

const logoutButton = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn)
  const { setDisplayedSong, setSongList } = useContext(DisplayedSong)
  const setQueryString = useQueryString("set")[1]

  const handleClick = () => {
    setDisplayedSong(undefined)
    setLoggedIn("")
    setQueryString("")
    setSongList([])
  }

  return (
    <div className = "logout-button">
      <button
        className = "text-button"
        onClick = {() => handleClick()}
        style={{textTransform: "capitalize"}}
      >
        Log Out from {loggedIn}
      </button>
    </div>
  )
}

export default logoutButton
