import React, { useContext, SyntheticEvent } from 'react'
import { LoggedIn } from '../pages/_app'
import { deleteSong } from '../utils/crud'
import { DisplayedSong } from '../pages/index'

const RemoveSongButton = ({title, artist}) => {
  const { songList, setSongList, setDisplayedSong } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)

  const handleClick = (e: SyntheticEvent) => {
    deleteSong({title: title, artist: artist, set: loggedIn})
    setSongList([...songList].filter(song => song.artist != artist && song.title != title))
    setDisplayedSong(undefined)
    e.stopPropagation();
  }

  return (
    <button
      className="remove-song-button"
      onClick={(e) => handleClick(e)}
     />
  )
}

export default RemoveSongButton
