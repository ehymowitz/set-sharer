import React, { useContext } from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'
import { LoggedIn } from '../pages/index'

const LogoutButton = () => {
  const { loggedIn, setLoggedIn } = useContext(LoggedIn)

  const logOut = () => {
    setLoggedIn(false)
  }

  return (
    <div className="log-button"
      onClick = { async () => {
        const { data, error } = await fetcher("/api/logout")
        if (error) {
          alert(error)
          return
        }
        await mutate("/api/set")
        logOut()
      }}>
      <h2>
        ➡️
      </h2>
    </div>
  )
}

export default LogoutButton
