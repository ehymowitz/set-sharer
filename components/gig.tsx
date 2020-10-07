import React from 'react'
import { useGigInfo } from './util/hooks'
import CreateGigForm from './createGigForm'
import LogoutButton from './logoutButton'

const Gig = () => {

  const { gigInfo } = useGigInfo()
  if (!gigInfo) return null

  return (
    <div className = "gig">
      {!gigInfo.setName ? (
        <CreateGigForm />
      ) :
      (
        <div className = "gig-show">
          <h2>Setlist: <strong>{gigInfo.setName}</strong></h2>
          <LogoutButton />
        </div>
      )}
    </div>
  )
}

export default Gig
