import React from 'react'
import Songs from '../components/songs'
import CreateSong from '../components/createSong'
import Gig from '../components/gig'

export default () => {
  return (
    <div>
      Set Sharer
      <Songs/>
      <CreateSong/>
      <Gig/>
    </div>
  )
}
