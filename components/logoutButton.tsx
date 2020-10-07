import React from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const LogoutButton = () => {

  return (
    <div className="log-button"
      onClick = { async () => {
        const { data, error } = await fetcher("/api/logout")
        if (error) {
          alert(error)
          return
        }
        await mutate("/api/set")
      }}>
      <h2>
        ➡️
      </h2>
    </div>
  )
}

export default LogoutButton
