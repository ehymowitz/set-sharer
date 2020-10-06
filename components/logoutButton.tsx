import React, { useState } from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const LogoutButton = () => {
  const [loading, setLoading] = useState(false)

  return (
    <button
      onClick = { async () => {
        setLoading(true)
        const { data, error } = await fetcher("/api/logout")
        if (error) {
          console.log(error)
          setLoading(false)
          return
        }
        await mutate("/api/set")
      }}>
      Leave Set
    </button>
  )
}

export default LogoutButton
