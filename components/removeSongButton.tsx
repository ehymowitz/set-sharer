import React, { useContext } from 'react'
import { LoggedIn } from '../pages/_app'
import { deleteSong } from '../utils/crud'
import { DisplayedSong } from '../pages/index'

const RemoveSongButton = ({title, artist}) => {
  const { songList, setSongList } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)

  const handleClick = () => {
    deleteSong({title: title, artist: artist, set: loggedIn})
    setSongList([...songList].filter(song => song.artist != artist && song.title != title))
  }

  return (
    <div
      className="remove-song-button"
      onClick={() => handleClick()}
     />
  )
}

export default RemoveSongButton
