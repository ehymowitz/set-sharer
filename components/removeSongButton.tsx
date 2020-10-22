import React, { useContext } from 'react'
import { LoggedIn } from '../pages/_app'
import { deleteSong } from '../utils/crud'


const RemoveSongButton = ({title, setChanged}) => {
  const { loggedIn } = useContext(LoggedIn)

  const handleClick = () => {
    deleteSong({title: title, set: loggedIn})
    setChanged(true)
  }

  return (
    <div
      className="remove-song-button"
      style={{width: "20px", height: "20px", borderRadius: "50%", backgroundColor: "red" }}
      onClick={() => handleClick()}
     />
  )
}

export default RemoveSongButton
