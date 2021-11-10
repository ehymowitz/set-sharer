import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useState,
} from "react";
import { DisplayedSong } from "../../pages/index";
import { TextButton } from "../../styles/clickables";
import useUpdateSong from "../../utils/useUpdateSong";

const EditSongForm = ({ setOpen }) => {
  const { displayedSong } = useContext(DisplayedSong);
  const [form, changeForm] = useState({
    lyrics: displayedSong.lyrics,
    youtube: `https://www.youtube.com/watch?v=${displayedSong.youtubeID}`,
    spotify: `https://open.spotify.com/track${displayedSong.spotifyID}`,
    artwork: displayedSong.spotifyAlbumCover,
    soundcloud: displayedSong.soundCloud || "",
  });
  const updateSong = useUpdateSong();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const newNotes = displayedSong;
    newNotes.lyrics = form.lyrics;
    newNotes.spotifyAlbumCover = form.artwork;
    newNotes.spotifyID = !!form.spotify.split("/track")[1]
      ? form.spotify.split("/track")[1]
      : undefined;
    newNotes.youtubeID = !!form.youtube.split("v=")[1]?.split("&")[0]
      ? form.youtube.split("v=")[1]?.split("&")[0]
      : undefined;
    newNotes.soundCloud = !!form.soundcloud ? form.soundcloud : undefined;

    await updateSong({
      ...displayedSong,
      ...newNotes,
    });

    setOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    changeForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="song-edit-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="top">
        <h2 style={{ fontSize: "40px" }} id="modal-title">
          Edit Song Info
        </h2>
        <h3 style={{ textTransform: "none" }}>
          Be careful with this! Make sure the previews work before you submit
        </h3>
        <TextButton type="submit" id="modal-submit">
          Submit
        </TextButton>
      </div>
      <div className="left">
        <h2>lyrics</h2>
        <textarea
          onChange={(e) => handleChange(e)}
          id="lyrics"
          value={form.lyrics}
          name="lyrics"
        />
      </div>
      <div className="right">
        <div className="row">
          <div style={{ width: "70%" }}>
            <h2>Youtube</h2>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={form.youtube}
              name="youtube"
              placeholder="Youtube video URL - not embed code"
            />
          </div>
          <iframe
            className="youtube-video"
            width="150"
            height="100"
            src={`https://www.youtube.com/embed/${
              form.youtube.split("v=")[1]?.split("&")[0]
            }`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <h2>Spotify</h2>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={form.spotify}
              name="spotify"
              placeholder="Spotify 'Copy Song' Link"
            />
          </div>
          <iframe
            className="spotify-embed"
            src={`https://open.spotify.com/embed/track${
              form.spotify.split("/track")[1]
            }`}
            width="150"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
          />
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <h2>Album Cover</h2>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={form.artwork}
              name="artwork"
              placeholder="Any image url"
            />
          </div>
          <img src={form.artwork} alt="artwork" />
        </div>
        <div className="row">
          <div style={{ width: "70%" }}>
            <h2>SoundCloud</h2>
            <input
              onChange={(e) => handleChange(e)}
              type="text"
              value={form.soundcloud}
              name="soundcloud"
              placeholder="SoundCloud embed code"
            />
          </div>
          <iframe
            className="soundcloud-embed"
            src={form.soundcloud.split('src="')[1]}
            width="25%"
            height="80"
            frameBorder="0"
            allow="encrypted-media"
          />
        </div>
      </div>
    </form>
  );
};

export default EditSongForm;

// <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/915558670&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/essily" title="مهرجان طب اندال اندال اندال احمد موزه" target="_blank" style="color: #cccccc; text-decoration: none;">مهرجان طب اندال اندال اندال احمد موزه</a> · <a href="https://soundcloud.com/essily/baskotaya" title="مهرجان - انتى بسكوتايه مقرمشة | حسن شاكوش - حمادة مجدى 2020" target="_blank" style="color: #cccccc; text-decoration: none;">مهرجان - انتى بسكوتايه مقرمشة | حسن شاكوش - حمادة مجدى 2020</a></div>
