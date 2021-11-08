import React, {
  useState,
  useContext,
  ChangeEvent,
  SyntheticEvent,
} from "react";
import { LoggedIn } from "../../pages/_app";
import { createSong } from "../../utils/crud";
import { DisplayedSong } from "../../pages/index";
import {
  callSpotifyID,
  callSpotifyKey,
  callLyrics,
  callYoutubeSearch,
  callSpotifyAlbumCover,
} from "../../utils/apiCalls";
import KeyMap from "../../utils/keyMap";
import { TextButton } from "../../styles/clickables";

const AddSongForm = () => {
  const { loggedIn } = useContext(LoggedIn);
  const { songList, setSongList, setDisplayedSong } = useContext(DisplayedSong);
  const [formInput, setFormInput] = useState({
    artist: "",
    title: "",
    set: loggedIn,
  });

  async function callAPIs(artist: string, track: string) {
    const spotifyID = await callSpotifyID({ artist, track });
    const spotifyKey = await callSpotifyKey(spotifyID);
    const spotifyAlbumCover = await callSpotifyAlbumCover(spotifyID);
    const youtubeID = await callYoutubeSearch(`${track} by ${artist}`);

    return {
      spotifyID: spotifyID,
      spotifyKey: KeyMap(parseInt(spotifyKey)),
      spotifyAlbumCover: spotifyAlbumCover,
      lyrics: "Add lyrics",
      youtubeID: youtubeID,
      order: songList.length,
      chart: "",
      userNotes: [],
    };
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormInput({
      ...formInput,
      [e.target.name]: value,
    });
  };

  const handeSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (formInput.artist !== "" && formInput.title !== "") {
      callAPIs(formInput.artist, formInput.title).then((apiData) => {
        const songInfo = {
          artist: formInput.artist,
          title: formInput.title,
          notes: apiData,
          stems: [],
        };
        createSong(Object.assign(formInput, { notes: apiData }));
        setSongList([...songList, songInfo]);
        setDisplayedSong(songInfo);
      });
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
