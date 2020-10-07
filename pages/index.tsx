import React from 'react'
import Songs from '../components/songs'
import CreateSongForm from '../components/createSongForm'
import Gig from '../components/gig'

const Home = () => {
  return (
    <div>
      Set Sharer
      <Songs/>
      <CreateSongForm/>
      <Gig/>
    </div>
  )
}

export default Home
