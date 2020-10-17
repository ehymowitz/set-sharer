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
async function createSong(songData) {
  await fetch("/api/songs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}

// createSong({artist: "test", title: "test2", set: "songs"})


// READ
async function readSongs(songsData) {
  const response = await fetch("api/songs/read", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "set": songsData
    },
  })
  const {songs} = await response.json()

  return songs.map(song => ({
    id: song._id,
    artist: song.artist,
    title: song.title,
  }))
}

// readSongs("songs");


// UPDATE NOTES
async function updateSongNotes(songNoteData) {
  await fetch("api/songs/update-notes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songNoteData)
  })
}

// updateSongNotes({title: "test2", notes: {note1: "note2"}, set: "songs"})

// UPDATE Title
async function updateSongTitle(songTitleData) {
  await fetch("api/songs/update-title", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songTitleData)
  })
}

// updateSongTitle({title: "test4", newTitle: "test5", set: "songs"})

// UPDATE Artist
async function updateSongArtist(songArtistData) {
  await fetch("api/songs/update-artist", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songArtistData)
  })
}

// updateSongArtist({title: "test5", artist: "you", set: "songs"})


// DELETE
async function deleteSong(songData) {
  await fetch("api/songs/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songData)
  })
}

// deleteSong({title: "test5", set: "songs"})


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
