import { useContext } from "react";
import { DisplayedSong, Song } from "../pages";
import { LoggedIn } from "../pages/_app";
import { updateSong } from "./crud/song";

const useUpdateSong = () => {
  const { loggedIn } = useContext(LoggedIn);
  const { setDisplayedSong } = useContext(DisplayedSong);

  const updateSongEverywhere = async (newSong: Song) => {
    setDisplayedSong(newSong);
    await updateSong({
      song: newSong,
      set: loggedIn,
    });
  };

  return updateSongEverywhere;
};

export default useUpdateSong;
