import React, { SyntheticEvent, useContext } from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { deleteSong, updateSong } from "../../utils/crud/song";

const RemoveSongButton = ({ title, artist }) => {
  const { songList, setSongList, displayedSong, setDisplayedSong } =
    useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);

  const handleClick = async (e: SyntheticEvent) => {
    const newSongList = [...songList]
      .filter((song) => song.artist != artist && song.title != title)
      .map((song, i) => ({ ...song, order: i }));

    await deleteSong({
      song: songList.find((s) => s.artist === artist && s.title === title),
      set: loggedIn,
    });

    newSongList.forEach(async (item) => {
      await updateSong({ song: item, set: loggedIn });
    });

    setSongList(newSongList);
    setDisplayedSong(undefined);

    e.stopPropagation();
  };

  return (
    <button className="remove-song-button" onClick={(e) => handleClick(e)} />
  );
};

export default RemoveSongButton;
