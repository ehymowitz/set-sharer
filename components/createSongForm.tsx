import React, { useState } from 'react'
import { useSongs, useGigInfo } from './util/hooks'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const CreateSongForm = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const { songs } = useSongs()
  const { gigInfo } = useGigInfo()

  const resetForm = () => {
    setTitle("")
    setArtist("")
  }

  return (
    <div className="song-form">
      <form
        onSubmit = {async e => {
          e.preventDefault()

          if (artist.length < 1 || title.length < 1) {
            alert("Fully fill out the form")
            resetForm()
            return;
          }

          if ( !gigInfo || !gigInfo.setName ){
            alert("You need to be viewing a gig to add a song")
            resetForm()
            return
          }

          await fetcher("/api/song/create", {
            title: title,
            artist: artist,
          })
          await mutate("/api/songs", [{title: title, artist: artist, Set: useGigInfo}, ...songs])
          resetForm()
        }}
      >
        <div className="inputs">
          <input value = {title} onChange = { e => setTitle(e.target.value)} placeholder = "Song Name"/>
          <input value = {artist} onChange = { e => setArtist(e.target.value)} placeholder = "Song Artist"/>
        </div>
        <input className = "submit" type="submit" value="Add"/>
      </form>
    </div>
  )
}

export default CreateSongForm
