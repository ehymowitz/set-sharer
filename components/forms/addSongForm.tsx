import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { DisplayedSong } from "../../pages/index";
import { LoggedIn } from "../../pages/_app";
import { TextButton } from "../../styles/clickables";
import {
  callSpotifyAlbumCover,
  callSpotifyID,
  callSpotifyKey,
  callYoutubeSearch,
} from "../../utils/apiCalls";
import { createSong } from "../../utils/crud/song";
import KeyMap from "../../utils/keyMap";
import useUpdateSong from "../../utils/useUpdateSong";

const AddSongForm = () => {
  const { loggedIn } = useContext(LoggedIn);
  const { songList, setSongList, setDisplayedSong } = useContext(DisplayedSong);
  const [formInput, setFormInput] = useState({
    artist: "",
    title: "",
    set: loggedIn,
  });

  const updateSong = useUpdateSong();

  async function callAPIs(artist: string, track: string) {
    const spotifyID: string = await callSpotifyID({ artist, track });
    const spotifyKey: string = await callSpotifyKey(spotifyID);
    const spotifyAlbumCover: string = await callSpotifyAlbumCover(spotifyID);
    const youtubeID: string = await callYoutubeSearch(`${track} by ${artist}`);

    return {
      spotifyID: spotifyID,
      spotifyKey: KeyMap(parseInt(spotifyKey)),
      spotifyAlbumCover: spotifyAlbumCover,
      lyrics: "Add lyrics",
      youtubeID: youtubeID,
      order: songList.length,
    };
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormInput({
      ...formInput,
      [e.target.name]: value,
    });
  };

  const handeSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (formInput.artist !== "" && formInput.title !== "") {
      await callAPIs(formInput.artist, formInput.title).then(
        async (apiData) => {
          const songInfo = {
            artist: formInput.artist,
            title: formInput.title,
            ...apiData,
          };

          setDisplayedSong(songInfo);
          setSongList([...songList, songInfo]);
          await createSong({ song: songInfo, set: loggedIn });
        }
      );
    } else {
      alert("Song form was not filled out");
    }
    setFormInput({
      artist: "",
      title: "",
      set: loggedIn,
    });
  };

  return (
    <div className="add-song-form">
      <form onSubmit={(e) => handeSubmit(e)}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => handleChange(e)}
          name="title"
          value={formInput.title}
        />

        <input
          type="text"
          placeholder="Artist"
          onChange={(e) => handleChange(e)}
          name="artist"
          value={formInput.artist}
        />
        <TextButton type="submit">Add A Song</TextButton>
      </form>
    </div>
  );
};

export default AddSongForm;
