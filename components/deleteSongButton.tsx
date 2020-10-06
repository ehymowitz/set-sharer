import React from 'react'
import { mutate } from 'swr'
import { fetcher } from './util/fetcher'

const DeleteSongButton = ({ song, songs}) => {
  return (
    <div style = {{backgroundColor: 'red', width: '20px', height: '20px'}}
      onClick = { async () => {
        await fetcher("/api/song/delete", { id: song.id })
        await mutate("/api/songs", songs.filter( s => s.id !== song.id ))
      }}
    >

    </div>
  )
}

export default DeleteSongButton
