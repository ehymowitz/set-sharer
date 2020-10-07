import React from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const DeleteSongButton = ({ song, songs}) => {
  return (
    <div className = "delete-song-button"
      onClick = { async () => {
        await fetcher("/api/song/delete", { id: song.id })
        await mutate("/api/songs", songs.filter( s => s.id !== song.id ))
      }}
    >
      X
    </div>
  )
}

export default DeleteSongButton
