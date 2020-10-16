import React from 'react'
import Gig from '../components/gig'
import Songs from '../components/songs'
import CreateSongForm from '../components/createSongForm'

// POST
async function createSong(songData) {
  await fetch("/api/songs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}

createSong({artist: "test", title: "test2"})

// GET
async function getSongs() {
  const response = await fetch("api/songs/read")
  const {songs} = await response.json()

  return songs.map(song => ({
    id: song._id,
    artist: song.artist,
    title: song.title,
  }))
}

getSongs();

const SetViewer = () => {
  return (
    <div className = "set-viewer">
      <div className = "song-info">
        <h1>Set Sharer</h1>
        <p>TODO: Song Details</p>
      </div>
      <div className = "setlist">
        <Gig />
        <Songs />
        <CreateSongForm/>
      </div>
    </div>
  )
}

export default SetViewer
