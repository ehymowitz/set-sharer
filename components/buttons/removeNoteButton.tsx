import React, { useContext } from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { updateSongNotes } from "../../utils/crud";

const RemoveNoteButton = ({ target }) => {
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);

  const handleClick = () => {
    displayedSong.notes.userNotes.splice(target, 1);

    setDisplayedSong({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: displayedSong.notes,
    });

    updateSongNotes({
      title: displayedSong.title,
      artist: displayedSong.artist,
      notes: displayedSong.notes,
      set: loggedIn,
    });
  };

  return (
    <button className="remove-note-button" onClick={() => handleClick()} />
  );
};

export default RemoveNoteButton;
