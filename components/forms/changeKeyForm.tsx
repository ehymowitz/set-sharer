import React, { useContext, ChangeEvent } from 'react'
import { LoggedIn } from '../../pages/_app'
import { DisplayedSong } from '../../pages/index'
import { updateSongNotes } from '../../utils/crud'

const ChangeKeyForm = ({song}) => {
  const { loggedIn } = useContext(LoggedIn)
  const { setDisplayedSong } = useContext(DisplayedSong)

  const keys = [
    "C",
    "C#",
    "D",
    "Eb",
    "E",
    "F",
    "F#",
    "G",
    "Ab",
    "A",
    "Bb",
    "B",
  ]

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const songInfo = {title: song.title, artist: song.artist, notes: Object.assign(song.notes, {customKey: e.target.value})}
    updateSongNotes(Object.assign(songInfo, {set: loggedIn}))
    setDisplayedSong(songInfo)
    e.target.value = ""
  }

  return (
    <select
      name="keys"
      onChange = {(e) => handleChange(e)}
      defaultValue = {""}
    >
      <option value="" disabled hidden>Change Key</option>
      {keys.map((key, i) => {
        return(
          <option value={key} key={i}>
            {key === song.notes.spotifyKey ? `${key} (Default)` : key}
          </option>
        )
      })}
    </select>
  )
}

export default ChangeKeyForm
