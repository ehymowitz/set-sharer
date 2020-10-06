import React, { useState } from 'react'
import { useGigInfo } from './util/hooks'
import CreateGigForm from './createGigForm'
import LogoutButton from './logoutButton'

const Gig = () => {
  const { gigInfo } = useGigInfo()
  const [loading, setLoading] = useState()
  if (!gigInfo) return null

  return (
    <div>
      {!gigInfo.setName ? (
        <CreateGigForm />
      ) : (
        <p>
          Viewing set: <strong>{gigInfo.setName}</strong>
          <LogoutButton />
        </p>
      )}
    </div>
  )
}

export default Gig
