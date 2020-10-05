import React, { useState } from 'react'
import { useSongs } from './util/hooks'
import { mutate } from 'swr'

const CreateSong = () => {
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const { songs } = useSongs()

  return (
    <form
      onSubmit = {async e => {
          e.preventDefault()

          mutate("/api/songs", [{title: title, artist: artist}, ...songs], false)
          setTitle("")
          setArtist("")
      }}
    >
      <input value = {title} onChange = { e => setTitle(e.target.value)} />
      <input value = {artist} onChange = { e => setArtist(e.target.value)} />
      <input type="submit" value="add"/>
    </form>
  )
}

export default CreateSong
