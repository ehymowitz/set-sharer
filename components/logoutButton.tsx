import React from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const LogoutButton = () => {

  return (
    <button
      onClick = { async () => {
        const { data, error } = await fetcher("/api/logout")
        if (error) {
          console.log(error)
          return
        }
        await mutate("/api/set")
      }}>
      Leave Set
    </button>
  )
}

export default LogoutButton
