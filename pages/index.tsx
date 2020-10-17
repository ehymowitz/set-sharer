import React from 'react'
import Gig from '../components/gig'
import Songs from '../components/songs'
import CreateSongForm from '../components/createSongForm'

// SETS

// CREATE Collection
async function createSet(setData) {
  const response = await fetch("/api/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(setData),
  });
  const data = await response.json()
  return data
}

// createSet({name: 'test'})


// SONGS (NEED TO PASS SET DATA WHEN READY)

// CREATE
async function createSongs(songData) {
  await fetch("/api/songs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}

// createSong({artist: "test", title: "test2"})

// READ
async function readSongs() {
  const response = await fetch("api/songs/read")
  const {songs} = await response.json()

  return songs.map(song => ({
    id: song._id,
    artist: song.artist,
    title: song.title,
  }))
}

// readSongs();

// UPDATE

// DELETE

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
