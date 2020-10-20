import React, { useContext } from 'react'
import { LoggedIn } from '../pages/_app'

const logoutButton = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn)

  const handleClick = () => {
    setLoggedIn("")
    // remove local storage token here
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
