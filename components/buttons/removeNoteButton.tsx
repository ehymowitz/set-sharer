import React, { useContext } from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { updateSongNotes } from "../../utils/crud";

const RemoveNoteButton = ({ target }) => {
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);

  const handleClick = async () => {
    displayedSong.userNotes.splice(target, 1);

    setDisplayedSong({ ...displayedSong, userNotes: displayedSong.userNotes });

    await updateSongNotes({
      ...displayedSong,
      userNotes: displayedSong.userNotes,
      set: loggedIn,
    });
  };

  return (
    <button className="remove-note-button" onClick={() => handleClick()} />
  );
};

export default RemoveNoteButton;
