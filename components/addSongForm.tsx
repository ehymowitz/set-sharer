import React, {useState, useContext, ChangeEvent, SyntheticEvent} from 'react'
import { LoggedIn } from '../pages/_app'
import { createSong } from '../utils/crud'

const AddSongForm = ({setChanged}) => {
  const { loggedIn } = useContext(LoggedIn)

  const [formInput, setFormInput] = useState({
    artist: "",
    title: "",
    set: loggedIn
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormInput({
      ...formInput,
      [e.target.name]: value
    })
  }

  const handeSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    if (formInput.artist !== "" && formInput.title !== "") {
      createSong(formInput)
      setChanged(true)
    } else {
      alert("Song form was not filled out")
    }
    setFormInput({
      artist: "",
      title: "",
      set: loggedIn
    })
  }

  return (
    <div className="add-song-form">
      <form
        onSubmit = {(e) => handeSubmit(e)}
      >
        <input
          type="text"
          placeholder = "Title"
          onChange = {(e) => handleChange(e)}
          name = "title"
          value = {formInput.title}
        />

        <input
          type="text"
          placeholder = "Artist"
          onChange = {(e) => handleChange(e)}
          name = "artist"
          value = {formInput.artist}
        />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddSongForm
